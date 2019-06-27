export const snapshot = [
    {
        id: 84,
        kind: 'interface',
        name: 'X',
        members: [
            {
                name: 'foo',
                type: {
                    id: 'number',
                    kind: 'primitive',
                },
                sourceType: 'number',
                readonly: false,
                orNull: false,
                orUndefined: true,
            },
            {
                name: 'a',
                type: {
                    id: 'number',
                    kind: 'primitive',
                },
                sourceType: 'number',
                readonly: false,
                orNull: false,
                orUndefined: false,
            },
        ],
    },
    {
        id: 92,
        kind: 'union',
        name: 'Un',
        members: [
            {
                id: 'string',
                kind: 'primitive',
            },
            {
                id: 'number',
                kind: 'primitive',
            },
        ],
    },
    {
        id: 111,
        kind: 'interface',
        members: [
            {
                name: 'dOpt',
                doc: 'd doc',
                type: {
                    id: 'string',
                    kind: 'primitive',
                },
                sourceType: 'string',
                readonly: false,
                orNull: false,
                orUndefined: true,
            },
        ],
    },
    {
        id: 110,
        kind: 'interface',
        members: [
            {
                name: 'c',
                type: {
                    id: 111,
                    kind: 'interface',
                    members: [
                        {
                            name: 'dOpt',
                            doc: 'd doc',
                            type: {
                                id: 'string',
                                kind: 'primitive',
                            },
                            sourceType: 'string',
                            readonly: false,
                            orNull: false,
                            orUndefined: true,
                        },
                    ],
                },
                sourceType: '{\n                /** d doc */\n                dOpt?: string;\n            }',
                readonly: false,
                orNull: false,
                orUndefined: false,
            },
        ],
    },
    {
        id: 109,
        kind: 'interface',
        members: [
            {
                name: 'a',
                type: {
                    id: 'number',
                    kind: 'primitive',
                },
                sourceType: 'number',
                readonly: true,
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'b',
                type: {
                    id: 110,
                    kind: 'interface',
                    members: [
                        {
                            name: 'c',
                            type: {
                                id: 111,
                                kind: 'interface',
                                members: [
                                    {
                                        name: 'dOpt',
                                        doc: 'd doc',
                                        type: {
                                            id: 'string',
                                            kind: 'primitive',
                                        },
                                        sourceType: 'string',
                                        readonly: false,
                                        orNull: false,
                                        orUndefined: true,
                                    },
                                ],
                            },
                            sourceType:
                                '{\n                /** d doc */\n                dOpt?: string;\n            }',
                            readonly: false,
                            orNull: false,
                            orUndefined: false,
                        },
                    ],
                },
                sourceType:
                    '{\n            c: {\n                /** d doc */\n                dOpt?: string;\n            };\n        }',
                readonly: false,
                orNull: false,
                orUndefined: false,
            },
        ],
    },
    {
        id: 93,
        kind: 'interface',
        doc: 'A Doc',
        name: 'A',
        members: [
            {
                name: 'num',
                type: {
                    id: 'number',
                    kind: 'primitive',
                },
                sourceType: 'number',
                readonly: true,
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'str',
                type: {
                    id: 'string',
                    kind: 'primitive',
                },
                sourceType: 'string',
                readonly: false,
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'bool',
                type: {
                    id: 'boolean',
                    kind: 'primitive',
                },
                sourceType: 'boolean',
                readonly: false,
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'never',
                type: {
                    id: 'never',
                    kind: 'primitive',
                },
                sourceType: 'never',
                readonly: false,
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'symbol',
                type: {
                    id: 'symbol',
                    kind: 'primitive',
                },
                sourceType: 'symbol',
                readonly: false,
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'void',
                type: {
                    id: 'void',
                    kind: 'primitive',
                },
                sourceType: 'void',
                readonly: false,
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'any',
                type: {
                    id: 'any',
                    kind: 'primitive',
                },
                sourceType: 'any',
                readonly: false,
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'literalA',
                type: {
                    id: 'string',
                    kind: 'primitive',
                    members: 'A',
                },
                sourceType: "'A'",
                readonly: false,
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'literal1',
                type: {
                    id: 'number',
                    kind: 'primitive',
                    members: 1,
                },
                sourceType: '1',
                readonly: false,
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'literalTrue',
                type: {
                    id: 'boolean',
                    kind: 'primitive',
                    members: true,
                },
                sourceType: 'true',
                readonly: false,
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'opt',
                type: {
                    id: 'number',
                    kind: 'primitive',
                },
                sourceType: 'number',
                readonly: false,
                orNull: false,
                orUndefined: true,
            },
            {
                name: 'null',
                type: {
                    id: 'number',
                    kind: 'primitive',
                },
                sourceType: 'number | null',
                readonly: false,
                orNull: true,
                orUndefined: false,
            },
            {
                name: 'undefined',
                type: {
                    id: 'number',
                    kind: 'primitive',
                },
                sourceType: 'number | undefined',
                readonly: false,
                orNull: false,
                orUndefined: true,
            },
            {
                name: 'undefinedNull',
                type: {
                    id: 'number',
                    kind: 'primitive',
                },
                sourceType: 'number | undefined | null',
                readonly: false,
                orNull: true,
                orUndefined: true,
            },
            {
                name: 'undefinedNull2',
                type: {
                    id: 'number',
                    kind: 'primitive',
                },
                sourceType: 'number | null',
                readonly: false,
                orNull: true,
                orUndefined: true,
            },
            {
                name: 'doc',
                doc: 'Doc comment',
                type: {
                    id: 'string',
                    kind: 'primitive',
                },
                sourceType: 'string',
                readonly: false,
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'int',
                type: {
                    id: 'number',
                    kind: 'primitive',
                },
                sourceType: 'Int',
                readonly: false,
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'arr',
                type: {
                    id: 101,
                    kind: 'array',
                    members: {
                        id: 'number',
                        kind: 'primitive',
                    },
                },
                sourceType: 'number[]',
                readonly: false,
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'date',
                type: {
                    id: 102,
                    kind: 'native',
                    name: 'Date',
                    members: [],
                },
                sourceType: 'Date',
                readonly: false,
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'map',
                type: {
                    id: 108,
                    kind: 'native',
                    name: 'Map',
                    members: [
                        {
                            id: 'string',
                            kind: 'primitive',
                        },
                        {
                            id: 103,
                            kind: 'array',
                            members: {
                                id: 102,
                                kind: 'native',
                                name: 'Date',
                                members: [],
                            },
                        },
                    ],
                },
                sourceType: 'Map<string, Date[]>',
                readonly: false,
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'interfaceLiteral',
                type: {
                    id: 109,
                    kind: 'interface',
                    members: [
                        {
                            name: 'a',
                            type: {
                                id: 'number',
                                kind: 'primitive',
                            },
                            sourceType: 'number',
                            readonly: true,
                            orNull: false,
                            orUndefined: false,
                        },
                        {
                            name: 'b',
                            type: {
                                id: 110,
                                kind: 'interface',
                                members: [
                                    {
                                        name: 'c',
                                        type: {
                                            id: 111,
                                            kind: 'interface',
                                            members: [
                                                {
                                                    name: 'dOpt',
                                                    doc: 'd doc',
                                                    type: {
                                                        id: 'string',
                                                        kind: 'primitive',
                                                    },
                                                    sourceType: 'string',
                                                    readonly: false,
                                                    orNull: false,
                                                    orUndefined: true,
                                                },
                                            ],
                                        },
                                        sourceType:
                                            '{\n                /** d doc */\n                dOpt?: string;\n            }',
                                        readonly: false,
                                        orNull: false,
                                        orUndefined: false,
                                    },
                                ],
                            },
                            sourceType:
                                '{\n            c: {\n                /** d doc */\n                dOpt?: string;\n            };\n        }',
                            readonly: false,
                            orNull: false,
                            orUndefined: false,
                        },
                    ],
                },
                sourceType:
                    '{\n        readonly a: number;\n        b: {\n            c: {\n                /** d doc */\n                dOpt?: string;\n            };\n        };\n    }',
                readonly: false,
                orNull: false,
                orUndefined: false,
            },
        ],
    },
    {
        id: 113,
        kind: 'interface',
        name: 'SomeA',
        members: [
            {
                name: 'someA',
                type: {
                    id: 'number',
                    kind: 'primitive',
                },
                sourceType: 'number',
                readonly: false,
                orNull: false,
                orUndefined: false,
            },
        ],
    },
    {
        id: 114,
        kind: 'interface',
        name: 'SomeB',
        members: [
            {
                name: 'someB',
                type: {
                    id: 'number',
                    kind: 'primitive',
                },
                sourceType: 'number',
                readonly: false,
                orNull: false,
                orUndefined: false,
            },
        ],
    },
    {
        id: 115,
        kind: 'interface',
        name: 'SomeC',
        members: [
            {
                name: 'someC',
                type: {
                    id: 'number',
                    kind: 'primitive',
                },
                sourceType: 'number',
                readonly: false,
                orNull: false,
                orUndefined: false,
            },
        ],
    },
    {
        id: 117,
        kind: 'union',
        members: [
            {
                id: 113,
                kind: 'interface',
                name: 'SomeA',
                members: [
                    {
                        name: 'someA',
                        type: {
                            id: 'number',
                            kind: 'primitive',
                        },
                        sourceType: 'number',
                        readonly: false,
                        orNull: false,
                        orUndefined: false,
                    },
                ],
            },
            {
                id: 114,
                kind: 'interface',
                name: 'SomeB',
                members: [
                    {
                        name: 'someB',
                        type: {
                            id: 'number',
                            kind: 'primitive',
                        },
                        sourceType: 'number',
                        readonly: false,
                        orNull: false,
                        orUndefined: false,
                    },
                ],
            },
        ],
    },
    {
        id: 125,
        kind: 'union',
        members: [
            {
                id: 'string',
                kind: 'primitive',
                members: 'a',
            },
            {
                id: 'string',
                kind: 'primitive',
                members: 'b',
            },
            {
                id: 'string',
                kind: 'primitive',
                members: 'c',
            },
        ],
    },
    {
        id: 116,
        kind: 'interface',
        name: 'Unions',
        members: [
            {
                name: 'union',
                type: {
                    id: 117,
                    kind: 'union',
                    members: [
                        {
                            id: 113,
                            kind: 'interface',
                            name: 'SomeA',
                            members: [
                                {
                                    name: 'someA',
                                    type: {
                                        id: 'number',
                                        kind: 'primitive',
                                    },
                                    sourceType: 'number',
                                    readonly: false,
                                    orNull: false,
                                    orUndefined: false,
                                },
                            ],
                        },
                        {
                            id: 114,
                            kind: 'interface',
                            name: 'SomeB',
                            members: [
                                {
                                    name: 'someB',
                                    type: {
                                        id: 'number',
                                        kind: 'primitive',
                                    },
                                    sourceType: 'number',
                                    readonly: false,
                                    orNull: false,
                                    orUndefined: false,
                                },
                            ],
                        },
                    ],
                },
                sourceType: 'SomeA | SomeB',
                readonly: false,
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'unionOpt',
                type: {
                    id: 117,
                    kind: 'union',
                    members: [
                        {
                            id: 113,
                            kind: 'interface',
                            name: 'SomeA',
                            members: [
                                {
                                    name: 'someA',
                                    type: {
                                        id: 'number',
                                        kind: 'primitive',
                                    },
                                    sourceType: 'number',
                                    readonly: false,
                                    orNull: false,
                                    orUndefined: false,
                                },
                            ],
                        },
                        {
                            id: 114,
                            kind: 'interface',
                            name: 'SomeB',
                            members: [
                                {
                                    name: 'someB',
                                    type: {
                                        id: 'number',
                                        kind: 'primitive',
                                    },
                                    sourceType: 'number',
                                    readonly: false,
                                    orNull: false,
                                    orUndefined: false,
                                },
                            ],
                        },
                    ],
                },
                sourceType: 'SomeA | SomeB',
                readonly: false,
                orNull: false,
                orUndefined: true,
            },
            {
                name: 'unionabc',
                type: {
                    id: 125,
                    kind: 'union',
                    members: [
                        {
                            id: 'string',
                            kind: 'primitive',
                            members: 'a',
                        },
                        {
                            id: 'string',
                            kind: 'primitive',
                            members: 'b',
                        },
                        {
                            id: 'string',
                            kind: 'primitive',
                            members: 'c',
                        },
                    ],
                },
                sourceType: "'a' | 'b' | 'c'",
                readonly: false,
                orNull: false,
                orUndefined: false,
            },
        ],
    },
    {
        id: 126,
        kind: 'interface',
        name: 'B',
        members: [
            {
                name: 'noArgsMethod',
                type: {
                    id: 'number',
                    kind: 'primitive',
                },
                sourceType: 'number',
                readonly: false,
                args: [],
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'method',
                type: {
                    id: 'number',
                    kind: 'primitive',
                },
                sourceType: 'number',
                readonly: false,
                args: [
                    {
                        name: 'arg1',
                        type: {
                            id: 'number',
                            kind: 'primitive',
                        },
                        sourceType: 'number',
                        orNull: false,
                        orUndefined: false,
                    },
                    {
                        name: 'arg',
                        type: {
                            id: 'string',
                            kind: 'primitive',
                        },
                        sourceType: 'string',
                        orNull: false,
                        orUndefined: false,
                    },
                ],
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'optMethod',
                type: {
                    id: 'number',
                    kind: 'primitive',
                },
                sourceType: 'number',
                readonly: false,
                args: [],
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'optNullableMethod',
                type: {
                    id: 'number',
                    kind: 'primitive',
                },
                sourceType: 'number | null',
                readonly: false,
                args: [],
                orNull: true,
                orUndefined: false,
            },
            {
                name: 'optNullableUndefinedMethod',
                type: {
                    id: 'number',
                    kind: 'primitive',
                },
                sourceType: 'number | null | undefined',
                readonly: false,
                args: [],
                orNull: true,
                orUndefined: true,
            },
            {
                name: 'methodOptArg',
                type: {
                    id: 'number',
                    kind: 'primitive',
                },
                sourceType: 'number',
                readonly: false,
                args: [
                    {
                        name: 'arg1',
                        type: {
                            id: 'number',
                            kind: 'primitive',
                        },
                        sourceType: 'number | undefined',
                        orNull: false,
                        orUndefined: true,
                    },
                    {
                        name: 'arg2',
                        type: {
                            id: 'string',
                            kind: 'primitive',
                        },
                        sourceType: 'string',
                        orNull: false,
                        orUndefined: true,
                    },
                ],
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'methodNullableArg',
                type: {
                    id: 'number',
                    kind: 'primitive',
                },
                sourceType: 'number',
                readonly: false,
                args: [
                    {
                        name: 'arg1',
                        type: {
                            id: 'number',
                            kind: 'primitive',
                        },
                        sourceType: 'number | null',
                        orNull: true,
                        orUndefined: false,
                    },
                    {
                        name: 'arg2',
                        type: {
                            id: 'string',
                            kind: 'primitive',
                        },
                        sourceType: 'string',
                        orNull: false,
                        orUndefined: true,
                    },
                ],
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'methodOpt',
                type: {
                    id: 'number',
                    kind: 'primitive',
                },
                sourceType: 'number | undefined',
                readonly: false,
                args: [
                    {
                        name: 'arg1',
                        type: {
                            id: 'number',
                            kind: 'primitive',
                        },
                        sourceType: 'number',
                        orNull: false,
                        orUndefined: false,
                    },
                ],
                orNull: false,
                orUndefined: true,
            },
            {
                name: 'methodNull',
                type: {
                    id: 'number',
                    kind: 'primitive',
                },
                sourceType: 'number | null',
                readonly: false,
                args: [
                    {
                        name: 'arg1',
                        type: {
                            id: 'number',
                            kind: 'primitive',
                        },
                        sourceType: 'number',
                        orNull: false,
                        orUndefined: false,
                    },
                ],
                orNull: true,
                orUndefined: false,
            },
            {
                name: 'methodDocArg',
                type: {
                    id: 'number',
                    kind: 'primitive',
                },
                sourceType: 'number',
                readonly: false,
                args: [
                    {
                        name: 'arg',
                        doc: 'Arg doc',
                        type: {
                            id: 'number',
                            kind: 'primitive',
                        },
                        sourceType: 'number',
                        orNull: false,
                        orUndefined: false,
                    },
                ],
                orNull: false,
                orUndefined: false,
            },
        ],
    },
    {
        id: 140,
        kind: 'interface',
        name: 'C',
        members: [
            {
                name: 'c',
                type: {
                    id: 'string',
                    kind: 'primitive',
                },
                sourceType: 'string',
                readonly: false,
                orNull: false,
                orUndefined: false,
            },
        ],
    },
    {
        id: 141,
        kind: 'interface',
        name: 'CD',
        members: [
            {
                name: 'd',
                type: {
                    id: 'number',
                    kind: 'primitive',
                },
                sourceType: 'number',
                readonly: false,
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'c',
                type: {
                    id: 'string',
                    kind: 'primitive',
                },
                sourceType: 'string',
                readonly: false,
                orNull: false,
                orUndefined: false,
            },
        ],
    },
    {
        id: 142,
        kind: 'union',
        doc: 'Union Doc',
        name: 'Union',
        members: [
            {
                id: 113,
                kind: 'interface',
                name: 'SomeA',
                members: [
                    {
                        name: 'someA',
                        type: {
                            id: 'number',
                            kind: 'primitive',
                        },
                        sourceType: 'number',
                        readonly: false,
                        orNull: false,
                        orUndefined: false,
                    },
                ],
            },
            {
                id: 115,
                kind: 'interface',
                name: 'SomeC',
                members: [
                    {
                        name: 'someC',
                        type: {
                            id: 'number',
                            kind: 'primitive',
                        },
                        sourceType: 'number',
                        readonly: false,
                        orNull: false,
                        orUndefined: false,
                    },
                ],
            },
        ],
    },
    {
        id: 149,
        kind: 'union',
        doc: 'Enum Doc',
        name: 'Enum',
        members: [
            {
                id: 'number',
                kind: 'primitive',
                members: 0,
            },
            {
                id: 'number',
                kind: 'primitive',
                members: 2,
            },
            {
                id: 'string',
                kind: 'primitive',
                members: 'C',
            },
        ],
    },
];
