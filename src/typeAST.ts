import * as ts from 'typescript';
import {Type, Arg, ArrayType, Interface, Native, Primitive, Prop, Union, Fun} from './types';
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

const primitiveMap = new Map<string | number | boolean, Primitive>();
function getPrimitive(type: Primitive['id'], literal?: string | number | boolean): Primitive {
    const key = literal === undefined ? type : literal;
    const exists = primitiveMap.get(key);
    if (exists !== undefined) return exists;
    const primitive: Primitive = {
        id: type,
        kind: 'primitive',
        doc: undefined,
        name: undefined,
        members: literal,
    };
    primitiveMap.set(key, primitive);
    return primitive;
}

export function getTypesFromSourceFile(checker: ts.TypeChecker, sourceFile: ts.SourceFile) {
    const typesMap = new Map<ts.Type, Type>();
    sourceFile.statements.forEach(visitor);
    return [...typesMap.values()];

    function getType(nullableTsType: ts.Type): Type {
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

        if (isBoolean) return getPrimitive('boolean');
        if (isString) return getPrimitive('string');
        if (isNumber) return getPrimitive('number');
        if (isSymbol) return getPrimitive('symbol');
        if (isNever) return getPrimitive('never');
        if (isVoid) return getPrimitive('void');
        if (isAny) return getPrimitive('any');

        if (isStringLiteral) return getPrimitive('string', tsType.value);
        if (isNumberLiteral) return getPrimitive('number', tsType.value);
        if (isBooleanLiteral) return getPrimitive('boolean', tsType.intrinsicName === 'true');

        const signatures = checker.getSignaturesOfType(tsType, ts.SignatureKind.Call);
        if (signatures.length > 0) {
            const signature = signatures[0];
            const returnType = signature.getReturnType();
            const type: Fun = {
                id: tsType.id,
                kind: 'function',
                doc: undefined,
                name: undefined,
                members: {
                    return: getType(returnType),
                    returnHasNull: hasNull(returnType),
                    returnHasUndefined: hasUndefined(returnType),
                    args: signature.parameters.map(createArg),
                },
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
                    members: tsType.types.map(t => getType(t)),
                };
                typesMap.set(tsType, type);
                return type;
            } else {
                const type: Union = {
                    id: tsType.id,
                    kind: 'union',
                    doc: undefined,
                    name: undefined,
                    members: tsType.types.map(t => getType(t)),
                };
                typesMap.set(tsType, type);
                return type;
            }
        }

        if (isStringLiteral || isNumberLiteral || isBooleanLiteral) {
            const type: Primitive = {
                id: isStringLiteral ? 'string' : isNumberLiteral ? 'number' : isBooleanLiteral ? 'boolean' : never(),
                kind: 'primitive',
                doc: undefined,
                name: undefined,
                members: nonNull(tsType.value === undefined ? tsType.intrinsicName : tsType.value),
            };
            return type;
        }

        if (checker.isArrayLikeType(tsType) && tsType.typeArguments) {
            const elementType = tsType.typeArguments[0];
            if (elementType) {
                const type: ArrayType = {
                    id: tsType.id,
                    kind: 'array',
                    doc: undefined,
                    name: undefined,
                    members: getType(elementType),
                };
                return type;
            }
        }
        if (symbol && symbol.declarations && symbol.declarations[0].getSourceFile().hasNoDefaultLib) {
            const typeArgs = (tsType as ts.TypeReference).typeArguments || [];
            const type: Native = {
                id: tsType.id,
                kind: 'native',
                doc: undefined,
                name: symbol.name,
                //todo:
                members: typeArgs.map(t => getType(t)),
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
                const type: Interface = {
                    id: tsType.id,
                    kind: 'interface',
                    doc: undefined,
                    name: undefined,
                    members: checker.getPropertiesOfType(tsType).map(createProp),
                };
                typesMap.set(tsType, type);
                return type;
            }
        }

        if (tsType.flags & ts.TypeFlags.Object) {
            if (tsType.symbol.flags & ts.SymbolFlags.TypeLiteral) {
                const type: Interface = {
                    id: tsType.id,
                    kind: 'interface',
                    doc: undefined,
                    name: undefined,
                    members: checker.getPropertiesOfType(tsType).map(createProp),
                };
                typesMap.set(tsType, type);
                return type;
            } else {
                const type: Interface = {
                    id: tsType.id,
                    kind: 'interface',
                    doc: getDoc(tsType.symbol),
                    name: tsType.symbol.name,
                    members: checker.getPropertiesOfType(tsType).map(createProp),
                };
                typesMap.set(tsType, type);
                return type;
            }
        }
        const type: Interface = {
            id: tsType.id,
            kind: 'interface',
            doc: undefined,
            name: undefined,
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
        const declaration = symbol.declarations[0] as ts.PropertySignature;
        const modifiers = declaration.modifiers;
        return {
            name: symbol.name,
            doc: getDoc(symbol),
            type: getType(tsType),
            sourceType: sourceType(declaration.type),
            readonly:
                modifiers !== undefined ? modifiers.some(mod => mod.kind === ts.SyntaxKind.ReadonlyKeyword) : false,
            hasNull: hasNull(tsType),
            hasUndefined: hasUndefined(tsType),
        };
    }

    function createArg(symbol: ts.Symbol): Arg {
        const tsType = getTypeFromSymbol(symbol);
        const declaration = symbol.declarations[0] as ts.ParameterDeclaration;
        return {
            name: symbol.name,
            doc: getDoc(symbol),
            type: getType(tsType),
            sourceType: sourceType(declaration.type),
            isSpread: Boolean(declaration && declaration.dotDotDotToken),
            isOptional: Boolean(declaration && declaration.questionToken),

            hasNull: hasNull(tsType),
            hasUndefined: hasUndefined(tsType),
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
            getType(checker.getTypeAtLocation(node));
        }
        if (ts.isEnumDeclaration(node)) {
            getType(checker.getTypeAtLocation(node));
        }
        if (ts.isTypeAliasDeclaration(node) && node.typeParameters === undefined) {
            const type = getType(checker.getTypeAtLocation(node));
            if (type.kind === 'interface' || type.kind === 'union') {
                type.name = node.name.text;
            }
        }
    }
}

function sourceType(node: ts.TypeNode | undefined) {
    return node ? node.getText() : '';
}

function never(never?: never): never {
    throw new Error('Never possible');
}

function nonNull<T>(val: T | undefined): T {
    if (val === undefined) throw new Error('Undefined is not expected');
    return val;
}

function hasNull(tsType: ts.Type) {
    return tsType.isUnion() && tsType.types.some(t => (t.flags & ts.TypeFlags.Null) > 0);
}
function hasUndefined(tsType: ts.Type) {
    return tsType.isUnion() && tsType.types.some(t => (t.flags & ts.TypeFlags.Undefined) > 0);
}
