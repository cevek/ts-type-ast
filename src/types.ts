export type AllTypes = Interface | ArrayType | Union | Native | Primitive;
export interface Primitive {
    id: 'number' | 'string' | 'boolean' | 'symbol' | 'void' | 'never' | 'any';
    kind: 'primitive';
    name: undefined;
    doc: undefined;
    members: string | number | boolean | undefined;
}

export interface Native {
    id: number;
    kind: 'native';
    name: string;
    doc: undefined;
    members: AllTypes[];
}

export interface ArrayType {
    id: number;
    kind: 'array';
    doc: undefined;
    name: undefined;
    members: AllTypes;
}
export interface Interface {
    id: number;
    kind: 'interface';
    doc: string | undefined;
    name: string | undefined;
    members: Prop[];
}

export interface Union {
    id: number;
    kind: 'union';
    doc: string | undefined;
    name: string | undefined;
    members: AllTypes[];
}

export interface Prop {
    doc: string | undefined;
    name: string;
    type: AllTypes;
    sourceType: string;
    args: Arg[] | undefined;
    orUndefined: boolean;
    orNull: boolean;
    readonly: boolean;
}
export interface Arg {
    doc: string | undefined;
    name: string;
    type: AllTypes;
    sourceType: string;
    orUndefined: boolean;
    orNull: boolean;
}
