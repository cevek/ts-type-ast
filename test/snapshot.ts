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
                hasNull: false,
                hasUndefined: true,
            },
            {
                name: 'a',
                type: {
                    id: 'number',
                    kind: 'primitive',
                },
                sourceType: 'number',
                readonly: false,
                hasNull: false,
                hasUndefined: false,
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
                hasNull: false,
                hasUndefined: true,
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
                            hasNull: false,
                            hasUndefined: true,
                        },
                    ],
                },
                sourceType: '{\n                /** d doc */\n                dOpt?: string;\n            }',
                readonly: false,
                hasNull: false,
                hasUndefined: false,
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
                hasNull: false,
                hasUndefined: false,
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
                                        hasNull: false,
                                        hasUndefined: true,
                                    },
                                ],
                            },
                            sourceType:
                                '{\n                /** d doc */\n                dOpt?: string;\n            }',
                            readonly: false,
                            hasNull: false,
                            hasUndefined: false,
                        },
                    ],
                },
                sourceType:
                    '{\n            c: {\n                /** d doc */\n                dOpt?: string;\n            };\n        }',
                readonly: false,
                hasNull: false,
                hasUndefined: false,
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
                hasNull: false,
                hasUndefined: false,
            },
            {
                name: 'str',
                type: {
                    id: 'string',
                    kind: 'primitive',
                },
                sourceType: 'string',
                readonly: false,
                hasNull: false,
                hasUndefined: false,
            },
            {
                name: 'bool',
                type: {
                    id: 'boolean',
                    kind: 'primitive',
                },
                sourceType: 'boolean',
                readonly: false,
                hasNull: false,
                hasUndefined: false,
            },
            {
                name: 'never',
                type: {
                    id: 'never',
                    kind: 'primitive',
                },
                sourceType: 'never',
                readonly: false,
                hasNull: false,
                hasUndefined: false,
            },
            {
                name: 'symbol',
                type: {
                    id: 'symbol',
                    kind: 'primitive',
                },
                sourceType: 'symbol',
                readonly: false,
                hasNull: false,
                hasUndefined: false,
            },
            {
                name: 'void',
                type: {
                    id: 'void',
                    kind: 'primitive',
                },
                sourceType: 'void',
                readonly: false,
                hasNull: false,
                hasUndefined: false,
            },
            {
                name: 'any',
                type: {
                    id: 'any',
                    kind: 'primitive',
                },
                sourceType: 'any',
                readonly: false,
                hasNull: false,
                hasUndefined: false,
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
                hasNull: false,
                hasUndefined: false,
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
                hasNull: false,
                hasUndefined: false,
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
                hasNull: false,
                hasUndefined: false,
            },
            {
                name: 'opt',
                type: {
                    id: 'number',
                    kind: 'primitive',
                },
                sourceType: 'number',
                readonly: false,
                hasNull: false,
                hasUndefined: true,
            },
            {
                name: 'null',
                type: {
                    id: 'number',
                    kind: 'primitive',
                },
                sourceType: 'number | null',
                readonly: false,
                hasNull: true,
                hasUndefined: false,
            },
            {
                name: 'undefined',
                type: {
                    id: 'number',
                    kind: 'primitive',
                },
                sourceType: 'number | undefined',
                readonly: false,
                hasNull: false,
                hasUndefined: true,
            },
            {
                name: 'undefinedNull',
                type: {
                    id: 'number',
                    kind: 'primitive',
                },
                sourceType: 'number | undefined | null',
                readonly: false,
                hasNull: true,
                hasUndefined: true,
            },
            {
                name: 'undefinedNull2',
                type: {
                    id: 'number',
                    kind: 'primitive',
                },
                sourceType: 'number | null',
                readonly: false,
                hasNull: true,
                hasUndefined: true,
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
                hasNull: false,
                hasUndefined: false,
            },
            {
                name: 'int',
                type: {
                    id: 'number',
                    kind: 'primitive',
                },
                sourceType: 'Int',
                readonly: false,
                hasNull: false,
                hasUndefined: false,
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
                hasNull: false,
                hasUndefined: false,
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
                hasNull: false,
                hasUndefined: false,
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
                hasNull: false,
                hasUndefined: false,
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
                            hasNull: false,
                            hasUndefined: false,
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
                                                    hasNull: false,
                                                    hasUndefined: true,
                                                },
                                            ],
                                        },
                                        sourceType:
                                            '{\n                /** d doc */\n                dOpt?: string;\n            }',
                                        readonly: false,
                                        hasNull: false,
                                        hasUndefined: false,
                                    },
                                ],
                            },
                            sourceType:
                                '{\n            c: {\n                /** d doc */\n                dOpt?: string;\n            };\n        }',
                            readonly: false,
                            hasNull: false,
                            hasUndefined: false,
                        },
                    ],
                },
                sourceType:
                    '{\n        readonly a: number;\n        b: {\n            c: {\n                /** d doc */\n                dOpt?: string;\n            };\n        };\n    }',
                readonly: false,
                hasNull: false,
                hasUndefined: false,
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
                hasNull: false,
                hasUndefined: false,
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
                hasNull: false,
                hasUndefined: false,
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
                hasNull: false,
                hasUndefined: false,
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
                        hasNull: false,
                        hasUndefined: false,
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
                        hasNull: false,
                        hasUndefined: false,
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
                                    hasNull: false,
                                    hasUndefined: false,
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
                                    hasNull: false,
                                    hasUndefined: false,
                                },
                            ],
                        },
                    ],
                },
                sourceType: 'SomeA | SomeB',
                readonly: false,
                hasNull: false,
                hasUndefined: false,
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
                                    hasNull: false,
                                    hasUndefined: false,
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
                                    hasNull: false,
                                    hasUndefined: false,
                                },
                            ],
                        },
                    ],
                },
                sourceType: 'SomeA | SomeB',
                readonly: false,
                hasNull: false,
                hasUndefined: true,
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
                hasNull: false,
                hasUndefined: false,
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
                    id: 127,
                    kind: 'function',
                    members: {
                        return: {
                            id: 'number',
                            kind: 'primitive',
                        },
                        returnHasNull: false,
                        returnHasUndefined: false,
                        args: [],
                    },
                },
                sourceType: 'number',
                readonly: false,
                hasNull: false,
                hasUndefined: false,
            },
            {
                name: 'method',
                type: {
                    id: 128,
                    kind: 'function',
                    members: {
                        return: {
                            id: 'number',
                            kind: 'primitive',
                        },
                        returnHasNull: false,
                        returnHasUndefined: false,
                        args: [
                            {
                                name: 'arg1',
                                type: {
                                    id: 'number',
                                    kind: 'primitive',
                                },
                                sourceType: 'number',
                                isSpread: false,
                                isOptional: false,
                                hasNull: false,
                                hasUndefined: false,
                            },
                            {
                                name: 'arg',
                                type: {
                                    id: 'string',
                                    kind: 'primitive',
                                },
                                sourceType: 'string',
                                isSpread: false,
                                isOptional: false,
                                hasNull: false,
                                hasUndefined: false,
                            },
                        ],
                    },
                },
                sourceType: 'number',
                readonly: false,
                hasNull: false,
                hasUndefined: false,
            },
            {
                name: 'optMethod',
                type: {
                    id: 129,
                    kind: 'function',
                    members: {
                        return: {
                            id: 'number',
                            kind: 'primitive',
                        },
                        returnHasNull: false,
                        returnHasUndefined: false,
                        args: [],
                    },
                },
                sourceType: 'number',
                readonly: false,
                hasNull: false,
                hasUndefined: true,
            },
            {
                name: 'optNullableMethod',
                type: {
                    id: 131,
                    kind: 'function',
                    members: {
                        return: {
                            id: 'number',
                            kind: 'primitive',
                        },
                        returnHasNull: true,
                        returnHasUndefined: false,
                        args: [],
                    },
                },
                sourceType: 'number | null',
                readonly: false,
                hasNull: false,
                hasUndefined: true,
            },
            {
                name: 'optNullableUndefinedMethod',
                type: {
                    id: 133,
                    kind: 'function',
                    members: {
                        return: {
                            id: 'number',
                            kind: 'primitive',
                        },
                        returnHasNull: true,
                        returnHasUndefined: true,
                        args: [],
                    },
                },
                sourceType: 'number | null | undefined',
                readonly: false,
                hasNull: false,
                hasUndefined: true,
            },
            {
                name: 'methodOptArg',
                type: {
                    id: 135,
                    kind: 'function',
                    members: {
                        return: {
                            id: 'number',
                            kind: 'primitive',
                        },
                        returnHasNull: false,
                        returnHasUndefined: false,
                        args: [
                            {
                                name: 'arg1',
                                type: {
                                    id: 'number',
                                    kind: 'primitive',
                                },
                                sourceType: 'number | undefined',
                                isSpread: false,
                                isOptional: false,
                                hasNull: false,
                                hasUndefined: true,
                            },
                            {
                                name: 'arg2',
                                type: {
                                    id: 'string',
                                    kind: 'primitive',
                                },
                                sourceType: 'string',
                                isSpread: false,
                                isOptional: true,
                                hasNull: false,
                                hasUndefined: true,
                            },
                        ],
                    },
                },
                sourceType: 'number',
                readonly: false,
                hasNull: false,
                hasUndefined: false,
            },
            {
                name: 'methodNullableArg',
                type: {
                    id: 136,
                    kind: 'function',
                    members: {
                        return: {
                            id: 'number',
                            kind: 'primitive',
                        },
                        returnHasNull: false,
                        returnHasUndefined: false,
                        args: [
                            {
                                name: 'arg1',
                                type: {
                                    id: 'number',
                                    kind: 'primitive',
                                },
                                sourceType: 'number | null',
                                isSpread: false,
                                isOptional: false,
                                hasNull: true,
                                hasUndefined: false,
                            },
                            {
                                name: 'arg2',
                                type: {
                                    id: 137,
                                    kind: 'array',
                                    members: {
                                        id: 'string',
                                        kind: 'primitive',
                                    },
                                },
                                sourceType: 'string[]',
                                isSpread: true,
                                isOptional: false,
                                hasNull: false,
                                hasUndefined: false,
                            },
                        ],
                    },
                },
                sourceType: 'number',
                readonly: false,
                hasNull: false,
                hasUndefined: false,
            },
            {
                name: 'methodOpt',
                type: {
                    id: 138,
                    kind: 'function',
                    members: {
                        return: {
                            id: 'number',
                            kind: 'primitive',
                        },
                        returnHasNull: false,
                        returnHasUndefined: true,
                        args: [
                            {
                                name: 'arg1',
                                type: {
                                    id: 'number',
                                    kind: 'primitive',
                                },
                                sourceType: 'number',
                                isSpread: false,
                                isOptional: false,
                                hasNull: false,
                                hasUndefined: false,
                            },
                        ],
                    },
                },
                sourceType: 'number | undefined',
                readonly: false,
                hasNull: false,
                hasUndefined: false,
            },
            {
                name: 'methodNull',
                type: {
                    id: 139,
                    kind: 'function',
                    members: {
                        return: {
                            id: 'number',
                            kind: 'primitive',
                        },
                        returnHasNull: true,
                        returnHasUndefined: false,
                        args: [
                            {
                                name: 'arg1',
                                type: {
                                    id: 'number',
                                    kind: 'primitive',
                                },
                                sourceType: 'number',
                                isSpread: false,
                                isOptional: false,
                                hasNull: false,
                                hasUndefined: false,
                            },
                        ],
                    },
                },
                sourceType: 'number | null',
                readonly: false,
                hasNull: false,
                hasUndefined: false,
            },
            {
                name: 'methodDocArg',
                type: {
                    id: 140,
                    kind: 'function',
                    members: {
                        return: {
                            id: 'number',
                            kind: 'primitive',
                        },
                        returnHasNull: false,
                        returnHasUndefined: false,
                        args: [
                            {
                                name: 'arg',
                                doc: 'Arg doc',
                                type: {
                                    id: 'number',
                                    kind: 'primitive',
                                },
                                sourceType: 'number',
                                isSpread: false,
                                isOptional: false,
                                hasNull: false,
                                hasUndefined: false,
                            },
                        ],
                    },
                },
                sourceType: 'number',
                readonly: false,
                hasNull: false,
                hasUndefined: false,
            },
        ],
    },
    {
        id: 141,
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
                hasNull: false,
                hasUndefined: false,
            },
        ],
    },
    {
        id: 142,
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
                hasNull: false,
                hasUndefined: false,
            },
            {
                name: 'c',
                type: {
                    id: 'string',
                    kind: 'primitive',
                },
                sourceType: 'string',
                readonly: false,
                hasNull: false,
                hasUndefined: false,
            },
        ],
    },
    {
        id: 143,
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
                        hasNull: false,
                        hasUndefined: false,
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
                        hasNull: false,
                        hasUndefined: false,
                    },
                ],
            },
        ],
    },
    {
        id: 150,
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
