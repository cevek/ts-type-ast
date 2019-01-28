import * as ts from 'typescript';
import {
    AllTypes,
    Arg,
    ArrayType,
    Enum,
    Interface,
    InterfaceLiteral,
    Native,
    Primitive,
    Prop,
    RootTypes,
    Union,
    UnionLiteral,
} from './types';
declare module 'typescript' {
    interface TypeChecker {
        isArrayLikeType(arrayType: ts.Type): arrayType is ts.TypeReference;
    }
    interface Type {
        id: number;
        intrinsicName: string;
    }
}

export function typeAST(checker: ts.TypeChecker, sourceFile: ts.SourceFile) {
    const typesMap = new Map<ts.Type, RootTypes>();
    const nonResolvedTypes = new Set<AllTypes>();
    sourceFile.statements.forEach(visitor);
    nonResolvedTypes.forEach(type => {
        console.error('Non resolved type:' + JSON.stringify(type));
    });
    return [...typesMap.values()];

    function getType(nullableTsType: ts.Type, rawType: string | undefined): AllTypes {
        const tsType = nullableTsType.getNonNullableType();

        let type = typesMap.get(tsType);
        if (type) return type;

        const symbol = tsType.symbol as ts.Symbol | undefined;

        const isString = tsType.flags & ts.TypeFlags.String;
        const isStringLiteral = tsType.flags & ts.TypeFlags.StringLiteral;
        const isNumber = tsType.flags & ts.TypeFlags.Number;
        const isNumberLiteral = tsType.flags & ts.TypeFlags.NumberLiteral;
        const isBoolean = tsType.flags & ts.TypeFlags.Boolean;
        const isBooleanLiteral = tsType.flags & ts.TypeFlags.BooleanLiteral;
        const isSymbol = tsType.flags & ts.TypeFlags.ESSymbol;
        const isNever = tsType.flags & ts.TypeFlags.Never;
        const isAny = tsType.flags & ts.TypeFlags.Any;
        const isVoid = tsType.flags & ts.TypeFlags.Void;
        // const isFunction = tsType.flags & ts.TypeFlags.Void;

        if (isString || isNumber || isBoolean || isSymbol || isNever || isAny || isVoid) {
            const type: Primitive = {
                kind: 'primitive',
                type: isString
                    ? 'string'
                    : isNumber
                    ? 'number'
                    : isBoolean
                    ? 'boolean'
                    : isSymbol
                    ? 'symbol'
                    : isNever
                    ? 'never'
                    : isVoid
                    ? 'void'
                    : isAny
                    ? 'any'
                    : never(),
                rawType: rawType,
                literal: undefined,
            };
            return type;
        }

        if (tsType.isUnion() && !tsType.aliasSymbol) {
            const type: UnionLiteral = {
                kind: 'unionLiteral',
                members: tsType.types.map(t => getType(t, undefined)),
            };
            return type;
        }

        if (isStringLiteral || isNumberLiteral || isBooleanLiteral) {
            const type: Primitive = {
                kind: 'primitive',
                type: isStringLiteral ? 'string' : isNumberLiteral ? 'number' : isBooleanLiteral ? 'boolean' : never(),
                rawType: rawType,
                literal: tsType.intrinsicName,
            };
            return type;
        }

        if (checker.isArrayLikeType(tsType) && tsType.typeArguments) {
            const elementType = tsType.typeArguments[0];
            if (elementType) {
                const type: ArrayType = {
                    kind: 'array',
                    //todo: rawType
                    element: getType(elementType, undefined),
                };
                return type;
            }
        }
        if (symbol && symbol.declarations[0].getSourceFile().hasNoDefaultLib) {
            const typeArgs = (tsType as ts.TypeReference).typeArguments || [];
            const type: Native = {
                id: tsType.id,
                kind: 'native',
                name: symbol.name,
                //todo:
                generics: typeArgs.map(t => getType(t, undefined)),
            };
            return type;
        }
        if (tsType.flags & ts.TypeFlags.Object && tsType.symbol.flags & ts.SymbolFlags.TypeLiteral) {
            const type: InterfaceLiteral = {
                kind: 'interfaceLiteral',
                members: checker.getPropertiesOfType(tsType).map(createProp),
            };
            return type;
        }

        type = { id: tsType.id } as RootTypes;
        typesMap.set(tsType, type);
        nonResolvedTypes.add(type);
        return type;
    }
    function getDoc(symbol: ts.Symbol | undefined) {
        if (!symbol) return;
        const doc = symbol.getDocumentationComment(checker);
        if (doc.length > 0) return doc[0].text;
    }

    function createProp(symbol: ts.Symbol): Prop {
        const tsType = getTypeFromSymbol(symbol);
        const nonNullType = tsType.getNonNullableType();

        const signature = checker.getSignaturesOfType(nonNullType, ts.SignatureKind.Call)[0] as
            | ts.Signature
            | undefined;
        const retType = signature ? signature.getReturnType() : nonNullType;
        const declNode = (symbol.declarations[0] as ts.PropertySignature).type;

        return {
            name: symbol.name,
            doc: getDoc(symbol),
            type: getType(retType, rawType(declNode)),
            args: signature && signature.parameters.map(createArg),
            optional: (symbol.flags & ts.SymbolFlags.Optional) > 0 || retType.getNonNullableType() !== retType,
        };
    }

    function createArg(symbol: ts.Symbol): Arg {
        const tsType = getTypeFromSymbol(symbol);
        const declNode = (symbol.declarations[0] as ts.PropertySignature).type;

        return {
            name: symbol.name,
            doc: getDoc(symbol),
            type: getType(tsType, rawType(declNode)),
            optional: (symbol.flags & ts.SymbolFlags.Optional) > 0 || tsType.getNonNullableType() !== tsType,
        };
    }

    function updateType<T extends AllTypes>(type: T, obj: T) {
        if (type.kind) never();
        Object.assign(type, obj);
        nonResolvedTypes.delete(type);
    }

    function getTypeFromSymbol(symbol: ts.Symbol) {
        return checker.getTypeOfSymbolAtLocation(symbol, symbol.declarations[0]);
    }

    function visitor(node: ts.Node) {
        if (ts.isInterfaceDeclaration(node)) {
            const tsType = checker.getTypeAtLocation(node);
            const type = getType(tsType, undefined) as Interface;
            updateType(type, {
                id: type.id,
                kind: 'interface',
                doc: getDoc(tsType.symbol),
                name: node.name.text,
                members: checker.getPropertiesOfType(tsType).map(createProp),
            });
        }
        if (ts.isEnumDeclaration(node)) {
            const tsType = checker.getTypeAtLocation(node) as ts.UnionOrIntersectionType;
            const type = getType(tsType, undefined) as Enum;
            updateType(type, {
                id: type.id,
                kind: 'enum',
                doc: getDoc(tsType.symbol),
                name: node.name.text,
                types: tsType.types.map(t => getType(t, undefined)),
            });
        }
        if (ts.isTypeAliasDeclaration(node)) {
            if (ts.isUnionTypeNode(node.type)) {
                const tsType = checker.getTypeAtLocation(node.type);
                const type = getType(tsType, undefined) as Union;
                updateType(type, {
                    id: type.id,
                    kind: 'union',
                    doc: getDoc(tsType.aliasSymbol),
                    name: node.name.text,
                    members: node.type.types.map(typeNode => getType(checker.getTypeFromTypeNode(typeNode), undefined)),
                });
            }
        }
    }
}

function rawType(node: ts.TypeNode | undefined) {
    return node ? node.getText() : undefined;
}

function never(never?: never): never {
    throw new Error('Never possible');
}
