export type Type = Interface | ArrayType | Union | Native | Primitive | Fun;
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
    members: Type[];
}

export interface ArrayType {
    id: number;
    kind: 'array';
    doc: undefined;
    name: undefined;
    members: Type;
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
    members: Type[];
}

export interface Fun {
    id: number;
    kind: 'function';
    doc: string | undefined;
    name: string | undefined;
    members: {
        return: Type;
        returnHasNull: boolean;
        returnHasUndefined: boolean;
        args: Arg[];
    };
}

export interface Prop {
    doc: string | undefined;
    name: string;
    type: Type;
    sourceType: string;
    hasUndefined: boolean;
    hasNull: boolean;
    readonly: boolean;
}
export interface Arg {
    doc: string | undefined;
    name: string;
    type: Type;
    sourceType: string;
    hasUndefined: boolean;
    hasNull: boolean;
    isSpread: boolean;
    isOptional: boolean;
}
