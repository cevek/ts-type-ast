export type AllTypes = Interface | InterfaceLiteral | ArrayType | Union | UnionLiteral | Enum | Native | Primitive;
export type RootTypes = Interface | Union | UnionLiteral | Enum | InterfaceLiteral;
export interface Primitive {
    kind: 'primitive';
    type: 'number' | 'string' | 'boolean' | 'symbol' | 'void' | 'never' | 'any';
    rawType: string | undefined;
    literal: string | number | boolean | undefined;
}
export interface Native {
    id: number;
    kind: 'native';
    name: string;
    generics: AllTypes[];
}

export interface ArrayType {
    kind: 'array';
    element: AllTypes;
}
export interface Interface {
    id: number;
    doc: string | undefined;
    name: string;
    kind: 'interface';
    members: Prop[];
}
export interface InterfaceLiteral {
    id: number;
    kind: 'interfaceLiteral';
    members: Prop[];
}
export interface Union {
    id: number;
    doc: string | undefined;
    name: string;
    kind: 'union';
    members: AllTypes[];
}
export interface UnionLiteral {
    id: number;
    kind: 'unionLiteral';
    members: AllTypes[];
}
export interface Enum {
    id: number;
    doc: string | undefined;
    name: string;
    kind: 'enum';
    types: AllTypes[];
}
export interface Prop {
    doc: string | undefined;
    name: string;
    type: AllTypes;
    args: Arg[] | undefined;
    optional: boolean;
}
export interface Arg {
    doc: string | undefined;
    name: string;
    type: AllTypes;
    optional: boolean;
}
