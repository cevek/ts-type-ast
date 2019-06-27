export type AllTypes = Interface | ArrayType | Union | Native | Primitive | Fun;
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

export interface Fun {
    id: number;
    kind: 'function';
    doc: string | undefined;
    name: string | undefined;
    members: {
        return: AllTypes;
        returnHasNull: boolean,
        returnHasUndefined: boolean,
        args: Arg[];
    };
}

export interface Prop {
    doc: string | undefined;
    name: string;
    type: AllTypes;
    sourceType: string;
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
    isSpread: boolean;
    isOptional: boolean;
}
