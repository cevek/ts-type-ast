import * as ts from 'typescript';
import {
    AllTypes,
    Arg,
    ArrayType,
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
        value: any;
    }
}

export function typeAST(checker: ts.TypeChecker, sourceFile: ts.SourceFile) {
    const typesMap = new Map<ts.Type, RootTypes>();
    sourceFile.statements.forEach(visitor);
    return [...typesMap.values()];

    function getType(nullableTsType: ts.Type, rawType: string | undefined): AllTypes {
        const tsType = nullableTsType.getNonNullableType();

        const exitsType = typesMap.get(tsType);
        if (exitsType) return exitsType;

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

        if (tsType.isUnion()) {
            if (tsType.aliasSymbol) {
                const type: Union = {
                    id: tsType.id,
                    kind: 'union',
                    doc: getDoc(tsType.aliasSymbol),
                    name: tsType.aliasSymbol.name,
                    members: tsType.types.map(t => getType(t, undefined)),
                };
                typesMap.set(tsType, type);
                return type;
            } else {
                const type: UnionLiteral = {
                    id: tsType.id,
                    kind: 'unionLiteral',
                    members: tsType.types.map(t => getType(t, undefined)),
                };
                typesMap.set(tsType, type);
                return type;
            }
        }

        if (isStringLiteral || isNumberLiteral || isBooleanLiteral) {
            const type: Primitive = {
                kind: 'primitive',
                type: isStringLiteral ? 'string' : isNumberLiteral ? 'number' : isBooleanLiteral ? 'boolean' : never(),
                rawType: rawType,
                literal: nonNull(tsType.value === undefined ? tsType.intrinsicName : tsType.value),
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
        if (symbol && symbol.declarations && symbol.declarations[0].getSourceFile().hasNoDefaultLib) {
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

        if (tsType.isIntersection()) {
            if (tsType.aliasSymbol) {
                const type: Interface = {
                    id: tsType.id,
                    kind: 'interface',
                    doc: getDoc(tsType.aliasSymbol),
                    name: tsType.aliasSymbol.name,
                    members: checker.getPropertiesOfType(tsType).map(createProp),
                };
                typesMap.set(tsType, type);
                return type;
            } else {
                const type: InterfaceLiteral = {
                    id: tsType.id,
                    kind: 'interfaceLiteral',
                    members: checker.getPropertiesOfType(tsType).map(createProp),
                };
                typesMap.set(tsType, type);
                return type;
            }
        }

        if (tsType.flags & ts.TypeFlags.Object) {
            if (tsType.symbol.flags & ts.SymbolFlags.TypeLiteral) {
                const type: InterfaceLiteral = {
                    id: tsType.id,
                    kind: 'interfaceLiteral',
                    members: checker.getPropertiesOfType(tsType).map(createProp),
                };
                typesMap.set(tsType, type);
                return type;
            } else {
                const type: Interface = {
                    id: tsType.id,
                    kind: 'interface',
                    name: tsType.symbol.name,
                    doc: getDoc(tsType.symbol),
                    members: checker.getPropertiesOfType(tsType).map(createProp),
                };
                typesMap.set(tsType, type);
                return type;
            }
        }
        const type: InterfaceLiteral = {
            id: tsType.id,
            kind: 'interfaceLiteral',
            members: [],
        };
        typesMap.set(tsType, type);
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
        const nullableRetType = signature ? signature.getReturnType() : tsType;
        const declNode = (symbol.declarations[0] as ts.PropertySignature).type;

        return {
            name: symbol.name,
            doc: getDoc(symbol),
            type: getType(retType, rawType(declNode)),
            args: signature && signature.parameters.map(createArg),
            orNull: nullableRetType.isUnion() && nullableRetType.types.some(t => (t.flags & ts.TypeFlags.Null) > 0),
            orUndefined:
                nullableRetType.isUnion() && nullableRetType.types.some(t => (t.flags & ts.TypeFlags.Undefined) > 0),
            // nullable: tsType !== tsType.getNonNullableType(),
        };
    }

    function createArg(symbol: ts.Symbol): Arg {
        const tsType = getTypeFromSymbol(symbol);
        const declNode = symbol.declarations ? (symbol.declarations[0] as ts.PropertySignature).type : undefined;

        return {
            name: symbol.name,
            doc: getDoc(symbol),
            type: getType(tsType, rawType(declNode)),

            orNull: tsType.isUnion() && tsType.types.some(t => (t.flags & ts.TypeFlags.Null) > 0),
            orUndefined: tsType.isUnion() && tsType.types.some(t => (t.flags & ts.TypeFlags.Undefined) > 0),
        };
    }

    function getTypeFromSymbol(symbol: ts.Symbol) {
        return checker.getTypeOfSymbolAtLocation(
            symbol,
            symbol.declarations ? symbol.declarations[0] : ts.createIdentifier('Any'),
        );
    }

    function visitor(node: ts.Node) {
        if (ts.isInterfaceDeclaration(node)) {
            getType(checker.getTypeAtLocation(node), undefined);
        }
        if (ts.isEnumDeclaration(node)) {
            getType(checker.getTypeAtLocation(node), undefined);
        }
        if (ts.isTypeAliasDeclaration(node) && node.typeParameters === undefined) {
            const type = getType(checker.getTypeAtLocation(node), undefined);
            if (type.kind === 'interface' || type.kind === 'union') {
                type.name = node.name.text;
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

function nonNull<T>(val: T | undefined): T {
    if (val === undefined) throw new Error('Undefined is not expected');
    return val;
}
