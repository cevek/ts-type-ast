export const snapshot = [
    {
        id: 72,
        kind: 'interface',
        doc: 'A Doc',
        name: 'A',
        members: [
            {
                name: 'num',
                type: {
                    kind: 'primitive',
                    type: 'number',
                    rawType: 'number',
                },
                optional: false,
            },
            {
                name: 'str',
                type: {
                    kind: 'primitive',
                    type: 'string',
                    rawType: 'string',
                },
                optional: false,
            },
            {
                name: 'bool',
                type: {
                    kind: 'primitive',
                    type: 'boolean',
                    rawType: 'boolean',
                },
                optional: false,
            },
            {
                name: 'never',
                type: {
                    kind: 'primitive',
                    type: 'never',
                    rawType: 'never',
                },
                optional: false,
            },
            {
                name: 'symbol',
                type: {
                    kind: 'primitive',
                    type: 'symbol',
                    rawType: 'symbol',
                },
                optional: false,
            },
            {
                name: 'void',
                type: {
                    kind: 'primitive',
                    type: 'void',
                    rawType: 'void',
                },
                optional: false,
            },
            {
                name: 'any',
                type: {
                    kind: 'primitive',
                    type: 'any',
                    rawType: 'any',
                },
                optional: false,
            },
            {
                name: 'literalA',
                type: {
                    kind: 'primitive',
                    type: 'string',
                    rawType: "'A'",
                },
                optional: false,
            },
            {
                name: 'literal1',
                type: {
                    kind: 'primitive',
                    type: 'number',
                    rawType: '1',
                },
                optional: false,
            },
            {
                name: 'literalTrue',
                type: {
                    kind: 'primitive',
                    type: 'boolean',
                    rawType: 'true',
                    literal: 'true',
                },
                optional: false,
            },
            {
                name: 'opt',
                type: {
                    kind: 'primitive',
                    type: 'number',
                    rawType: 'number',
                },
                optional: true,
            },
            {
                name: 'opt2',
                type: {
                    kind: 'primitive',
                    type: 'number',
                    rawType: 'number | undefined | null',
                },
                optional: false,
            },
            {
                name: 'doc',
                doc: 'Doc comment',
                type: {
                    kind: 'primitive',
                    type: 'string',
                    rawType: 'string',
                },
                optional: false,
            },
            {
                name: 'int',
                type: {
                    kind: 'primitive',
                    type: 'number',
                    rawType: 'Int',
                },
                optional: false,
            },
            {
                name: 'arr',
                type: {
                    kind: 'array',
                    element: {
                        kind: 'primitive',
                        type: 'number',
                    },
                },
                optional: false,
            },
            {
                name: 'date',
                type: {
                    id: 85,
                    kind: 'native',
                    name: 'Date',
                    generics: [],
                },
                optional: false,
            },
            {
                name: 'map',
                type: {
                    id: 91,
                    kind: 'native',
                    name: 'Map',
                    generics: [
                        {
                            kind: 'primitive',
                            type: 'string',
                        },
                        {
                            kind: 'array',
                            element: {
                                id: 85,
                                kind: 'native',
                                name: 'Date',
                                generics: [],
                            },
                        },
                    ],
                },
                optional: false,
            },
            {
                name: 'interfaceLiteral',
                type: {
                    kind: 'interfaceLiteral',
                    members: [
                        {
                            name: 'a',
                            type: {
                                kind: 'primitive',
                                type: 'number',
                                rawType: 'number',
                            },
                            optional: false,
                        },
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
                                                    type: {
                                                        kind: 'primitive',
                                                        type: 'string',
                                                        rawType: 'string',
                                                    },
                                                    optional: true,
                                                },
                                            ],
                                        },
                                        optional: false,
                                    },
                                ],
                            },
                            optional: false,
                        },
                    ],
                },
                optional: false,
            },
        ],
    },
    {
        id: 96,
        kind: 'interface',
        name: 'SomeA',
        members: [
            {
                name: 'someA',
                type: {
                    kind: 'primitive',
                    type: 'number',
                    rawType: 'number',
                },
                optional: false,
            },
        ],
    },
    {
        id: 97,
        kind: 'interface',
        name: 'SomeB',
        members: [
            {
                name: 'someB',
                type: {
                    kind: 'primitive',
                    type: 'number',
                    rawType: 'number',
                },
                optional: false,
            },
        ],
    },
    {
        id: 98,
        kind: 'interface',
        name: 'SomeC',
        members: [
            {
                name: 'someC',
                type: {
                    kind: 'primitive',
                    type: 'number',
                    rawType: 'number',
                },
                optional: false,
            },
        ],
    },
    {
        id: 99,
        kind: 'interface',
        name: 'Unions',
        members: [
            {
                name: 'union',
                type: {
                    kind: 'unionLiteral',
                    members: [
                        {
                            id: 96,
                            kind: 'interface',
                            name: 'SomeA',
                            members: [
                                {
                                    name: 'someA',
                                    type: {
                                        kind: 'primitive',
                                        type: 'number',
                                        rawType: 'number',
                                    },
                                    optional: false,
                                },
                            ],
                        },
                        {
                            id: 97,
                            kind: 'interface',
                            name: 'SomeB',
                            members: [
                                {
                                    name: 'someB',
                                    type: {
                                        kind: 'primitive',
                                        type: 'number',
                                        rawType: 'number',
                                    },
                                    optional: false,
                                },
                            ],
                        },
                    ],
                },
                optional: false,
            },
            {
                name: 'unionOpt',
                type: {
                    kind: 'unionLiteral',
                    members: [
                        {
                            id: 96,
                            kind: 'interface',
                            name: 'SomeA',
                            members: [
                                {
                                    name: 'someA',
                                    type: {
                                        kind: 'primitive',
                                        type: 'number',
                                        rawType: 'number',
                                    },
                                    optional: false,
                                },
                            ],
                        },
                        {
                            id: 97,
                            kind: 'interface',
                            name: 'SomeB',
                            members: [
                                {
                                    name: 'someB',
                                    type: {
                                        kind: 'primitive',
                                        type: 'number',
                                        rawType: 'number',
                                    },
                                    optional: false,
                                },
                            ],
                        },
                    ],
                },
                optional: true,
            },
            {
                name: 'unionabc',
                type: {
                    kind: 'unionLiteral',
                    members: [
                        {
                            kind: 'primitive',
                            type: 'string',
                        },
                        {
                            kind: 'primitive',
                            type: 'string',
                        },
                        {
                            kind: 'primitive',
                            type: 'string',
                        },
                    ],
                },
                optional: false,
            },
        ],
    },
    {
        id: 109,
        kind: 'interface',
        name: 'B',
        members: [
            {
                name: 'noArgsMethod',
                type: {
                    kind: 'primitive',
                    type: 'number',
                    rawType: 'number',
                },
                args: [],
                optional: false,
            },
            {
                name: 'method',
                type: {
                    kind: 'primitive',
                    type: 'number',
                    rawType: 'number',
                },
                args: [
                    {
                        name: 'arg1',
                        type: {
                            kind: 'primitive',
                            type: 'number',
                            rawType: 'number',
                        },
                        optional: false,
                    },
                    {
                        name: 'arg',
                        type: {
                            kind: 'primitive',
                            type: 'string',
                            rawType: 'string',
                        },
                        optional: false,
                    },
                ],
                optional: false,
            },
            {
                name: 'optMethod',
                type: {
                    kind: 'primitive',
                    type: 'number',
                    rawType: 'number',
                },
                args: [],
                optional: true,
            },
            {
                name: 'methodOptArg',
                type: {
                    kind: 'primitive',
                    type: 'number',
                    rawType: 'number',
                },
                args: [
                    {
                        name: 'arg1',
                        type: {
                            kind: 'primitive',
                            type: 'number',
                            rawType: 'number | undefined',
                        },
                        optional: true,
                    },
                    {
                        name: 'arg2',
                        type: {
                            kind: 'primitive',
                            type: 'string',
                            rawType: 'string',
                        },
                        optional: true,
                    },
                ],
                optional: false,
            },
            {
                name: 'methodOpt',
                type: {
                    kind: 'primitive',
                    type: 'number',
                    rawType: 'number | undefined',
                },
                args: [
                    {
                        name: 'arg1',
                        type: {
                            kind: 'primitive',
                            type: 'number',
                            rawType: 'number',
                        },
                        optional: false,
                    },
                ],
                optional: true,
            },
            {
                name: 'methodDocArg',
                type: {
                    kind: 'primitive',
                    type: 'number',
                    rawType: 'number',
                },
                args: [
                    {
                        name: 'arg',
                        doc: 'Arg doc',
                        type: {
                            kind: 'primitive',
                            type: 'number',
                            rawType: 'number',
                        },
                        optional: false,
                    },
                ],
                optional: false,
            },
        ],
    },
    {
        id: 117,
        kind: 'interface',
        name: 'C',
        members: [
            {
                name: 'c',
                type: {
                    kind: 'primitive',
                    type: 'string',
                    rawType: 'string',
                },
                optional: false,
            },
        ],
    },
    {
        id: 118,
        kind: 'interface',
        name: 'CD',
        members: [
            {
                name: 'd',
                type: {
                    kind: 'primitive',
                    type: 'number',
                    rawType: 'number',
                },
                optional: false,
            },
            {
                name: 'c',
                type: {
                    kind: 'primitive',
                    type: 'string',
                    rawType: 'string',
                },
                optional: false,
            },
        ],
    },
    {
        id: 119,
        kind: 'union',
        doc: 'Union Doc',
        name: 'Union',
        members: [
            {
                id: 96,
                kind: 'interface',
                name: 'SomeA',
                members: [
                    {
                        name: 'someA',
                        type: {
                            kind: 'primitive',
                            type: 'number',
                            rawType: 'number',
                        },
                        optional: false,
                    },
                ],
            },
            {
                id: 98,
                kind: 'interface',
                name: 'SomeC',
                members: [
                    {
                        name: 'someC',
                        type: {
                            kind: 'primitive',
                            type: 'number',
                            rawType: 'number',
                        },
                        optional: false,
                    },
                ],
            },
        ],
    },
    {
        id: 126,
        kind: 'enum',
        doc: 'Enum Doc',
        name: 'Enum',
        types: [
            {
                kind: 'primitive',
                type: 'number',
            },
            {
                kind: 'primitive',
                type: 'number',
            },
            {
                kind: 'primitive',
                type: 'string',
            },
        ],
    },
];
