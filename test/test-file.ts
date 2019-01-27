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

interface Unions {
    union: A | C;
    unionOpt?: A | C;
    unionabc: 'a' | 'b' | 'c';
}

interface B {
    noArgsMethod(): A;
    method(arg1: number, arg: string): A;
    optMethod?(): A; // incorrect
    methodOptArg(arg1: number | undefined, arg2?: string): A;
    methodOpt(arg1: number): A | undefined;
    methodDocArg(/** Arg doc */ arg: number): A;
}

interface C {
    c: string;
}
interface CD extends C {
    d: number;
}

/** Union Doc */
type Union = A | B;

/** Enum Doc */
enum Enum {
    A,
    B = 2,
    C = 'C',
}
