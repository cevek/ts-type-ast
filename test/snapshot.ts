export const interfaceA = {
    id: 72,
    kind: 'interface',
    doc: 'A Doc',
    name: 'A',
    members: [
        { name: 'num', type: { kind: 'primitive', type: 'number' }, typeName: 'number', optional: false },
        { name: 'str', type: { kind: 'primitive', type: 'string' }, typeName: 'string', optional: false },
        { name: 'bool', type: { kind: 'primitive', type: 'boolean' }, typeName: 'boolean', optional: false },
        { name: 'never', type: { kind: 'primitive', type: 'never' }, typeName: 'never', optional: false },
        { name: 'symbol', type: { kind: 'primitive', type: 'symbol' }, typeName: 'symbol', optional: false },
        { name: 'void', type: { kind: 'primitive', type: 'void' }, typeName: 'void', optional: false },
        { name: 'any', type: { kind: 'primitive', type: 'any' }, typeName: 'any', optional: false },
        { name: 'literalA', type: { kind: 'primitive', type: 'string' }, typeName: "'A'", optional: false },
        { name: 'literal1', type: { kind: 'primitive', type: 'number' }, typeName: '1', optional: false },
        {
            name: 'literalTrue',
            type: { kind: 'primitive', type: 'boolean', literal: 'true' },
            typeName: 'true',
            optional: false,
        },
        { name: 'opt', type: { kind: 'primitive', type: 'number' }, typeName: 'number', optional: true },
        {
            name: 'opt2',
            type: { kind: 'primitive', type: 'number' },
            typeName: 'number | undefined | null',
            optional: false,
        },
        {
            name: 'doc',
            doc: 'Doc comment',
            type: { kind: 'primitive', type: 'string' },
            typeName: 'string',
            optional: false,
        },
        { name: 'int', type: { kind: 'primitive', type: 'number' }, typeName: 'Int', optional: false },
        {
            name: 'arr',
            type: { kind: 'array', element: { kind: 'primitive', type: 'number' } },
            typeName: 'number[]',
            optional: false,
        },
        {
            name: 'date',
            type: { id: 85, kind: 'native', name: 'Date', generics: [] },
            typeName: 'Date',
            optional: false,
        },
        {
            name: 'map',
            type: { id: 91, kind: 'native', name: 'Map', generics: [] },
            typeName: 'Map<string, Date[]>',
            optional: false,
        },
        {
            name: 'interfaceLiteral',
            type: {
                kind: 'interfaceLiteral',
                members: [
                    { name: 'a', type: { kind: 'primitive', type: 'number' }, typeName: 'number', optional: false },
                    {
                        name: 'b',
                        type: {
                            kind: 'interfaceLiteral',
                            members: [
                                {
                                    name: 'c',
                                    type: {
                                        kind: 'interfaceLiteral',
                                        members: [
                                            {
                                                name: 'dOpt',
                                                doc: 'd doc',
                                                type: { kind: 'primitive', type: 'string' },
                                                typeName: 'string',
                                                optional: true,
                                            },
                                        ],
                                    },
                                    typeName:
                                        '{\n                /** d doc */\n                dOpt?: string;\n            }',
                                    optional: false,
                                },
                            ],
                        },
                        typeName:
                            '{\n            c: {\n                /** d doc */\n                dOpt?: string;\n            };\n        }',
                        optional: false,
                    },
                ],
            },
            typeName:
                '{\n        a: number;\n        b: {\n            c: {\n                /** d doc */\n                dOpt?: string;\n            };\n        };\n    }',
            optional: false,
        },
    ],
};

export const interfaceC = {
    id: 97,
    kind: 'interface',
    name: 'C',
    members: [{ name: 'c', type: { kind: 'primitive', type: 'string' }, typeName: 'string', optional: false }],
};

export const Unions = {
    id: 96,
    kind: 'interface',
    name: 'Unions',
    members: [
        {
            name: 'union',
            type: {
                kind: 'unionLiteral',
                members: [interfaceA, interfaceC],
            },
            typeName: 'A | C',
            optional: false,
        },
        {
            name: 'unionOpt',
            type: {
                kind: 'unionLiteral',
                members: [interfaceA, interfaceC],
            },
            typeName: 'A | C',
            optional: true,
        },
        {
            name: 'unionabc',
            type: {
                kind: 'unionLiteral',
                members: [
                    { kind: 'primitive', type: 'string' },
                    { kind: 'primitive', type: 'string' },
                    { kind: 'primitive', type: 'string' },
                ],
            },
            typeName: "'a' | 'b' | 'c'",
            optional: false,
        },
    ],
};
export const interfaceB = {
    id: 107,
    kind: 'interface',
    name: 'B',
    members: [
        {
            name: 'noArgsMethod',
            type: interfaceA,
            typeName: 'A',
            args: [],
            optional: false,
        },
        {
            name: 'method',
            type: interfaceA,
            typeName: 'A',
            args: [
                { name: 'arg1', type: { kind: 'primitive', type: 'number' }, typeName: 'number', optional: false },
                { name: 'arg', type: { kind: 'primitive', type: 'string' }, typeName: 'string', optional: false },
            ],
            optional: false,
        },
        {
            name: 'optMethod',
            type: interfaceA,
            typeName: 'A',
            args: [],
            optional: true,
        },
        {
            name: 'methodOptArg',
            type: interfaceA,
            typeName: 'A',
            args: [
                {
                    name: 'arg1',
                    type: { kind: 'primitive', type: 'number' },
                    typeName: 'number | undefined',
                    optional: true,
                },
                { name: 'arg2', type: { kind: 'primitive', type: 'string' }, typeName: 'string', optional: true },
            ],
            optional: false,
        },
        {
            name: 'methodOpt',
            type: interfaceA,
            typeName: 'A | undefined',
            args: [{ name: 'arg1', type: { kind: 'primitive', type: 'number' }, typeName: 'number', optional: false }],
            optional: true,
        },
        {
            name: 'methodDocArg',
            type: interfaceA,
            typeName: 'A',
            args: [
                {
                    name: 'arg',
                    doc: 'Arg doc',
                    type: { kind: 'primitive', type: 'number' },
                    typeName: 'number',
                    optional: false,
                },
            ],
            optional: false,
        },
    ],
};

export const interfaceCD = {
    id: 116,
    kind: 'interface',
    name: 'CD',
    members: [
        { name: 'd', type: { kind: 'primitive', type: 'number' }, typeName: 'number', optional: false },
        { name: 'c', type: { kind: 'primitive', type: 'string' }, typeName: 'string', optional: false },
    ],
};

export const Union = {
    id: 117,
    kind: 'union',
    doc: 'Union Doc',
    name: 'Union',
    members: [interfaceA, interfaceB],
};

export const Enum = {
    id: 124,
    kind: 'enum',
    doc: 'Enum Doc',
    name: 'Enum',
    types: [
        { kind: 'primitive', type: 'number' },
        { kind: 'primitive', type: 'number' },
        { kind: 'primitive', type: 'string' },
    ],
};

export const snapshotTypes = [interfaceA, Unions, interfaceC, interfaceB, interfaceCD, Union, Enum];