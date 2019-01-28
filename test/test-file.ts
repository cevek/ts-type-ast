type Int = number;

/** A Doc */
interface A {
    num: number;
    str: string;
    bool: boolean;
    never: never;
    symbol: symbol;
    void: void;
    any: any;

    literalA: 'A';
    literal1: 1;
    literalTrue: true;

    opt?: number;
    opt2: number | undefined | null;

    /** Doc comment */
    doc: string;

    int: Int;

    arr: number[];
    date: Date;
    map: Map<string, Date[]>; // no generics

    interfaceLiteral: {
        a: number;
        b: {
            c: {
                /** d doc */
                dOpt?: string;
            };
        };
    };
}

interface SomeA {
    someA: number;
}
interface SomeB {
    someB: number;
}
interface SomeC {
    someC: number;
}

interface Unions {
    union: SomeA | SomeB;
    unionOpt?: SomeA | SomeB;
    unionabc: 'a' | 'b' | 'c';
}

interface B {
    noArgsMethod(): number;
    method(arg1: number, arg: string): number;
    optMethod?(): number; 
    methodOptArg(arg1: number | undefined, arg2?: string): number;
    methodOpt(arg1: number): number | undefined;
    methodDocArg(/** Arg doc */ arg: number): number;
}

interface C {
    c: string;
}
interface CD extends C {
    d: number;
}

/** Union Doc */
type Union = SomeA | SomeC;

/** Enum Doc */
enum Enum {
    A,
    B = 2,
    C = 'C',
}
