export const snapshot = [
    {
        id: 84,
        kind: 'interface',
        name: 'X',
        members: [
            {
                name: 'foo',
                type: {
                    kind: 'primitive',
                    type: 'number',
                    rawType: 'number',
                },
                orNull: false,
                orUndefined: true,
            },
            {
                name: 'a',
                type: {
                    kind: 'primitive',
                    type: 'number',
                    rawType: 'number',
                },
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
                kind: 'primitive',
                type: 'string',
            },
            {
                kind: 'primitive',
                type: 'number',
            },
        ],
    },
    {
        id: 111,
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
                orNull: false,
                orUndefined: true,
            },
        ],
    },
    {
        id: 110,
        kind: 'interfaceLiteral',
        members: [
            {
                name: 'c',
                type: {
                    id: 111,
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
                            orNull: false,
                            orUndefined: true,
                        },
                    ],
                },
                orNull: false,
                orUndefined: false,
            },
        ],
    },
    {
        id: 109,
        kind: 'interfaceLiteral',
        members: [
            {
                name: 'a',
                type: {
                    kind: 'primitive',
                    type: 'number',
                    rawType: 'number',
                },
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'b',
                type: {
                    id: 110,
                    kind: 'interfaceLiteral',
                    members: [
                        {
                            name: 'c',
                            type: {
                                id: 111,
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
                                        orNull: false,
                                        orUndefined: true,
                                    },
                                ],
                            },
                            orNull: false,
                            orUndefined: false,
                        },
                    ],
                },
                orNull: false,
                orUndefined: false,
            },
        ],
    },
    {
        id: 93,
        kind: 'interface',
        name: 'A',
        doc: 'A Doc',
        members: [
            {
                name: 'num',
                type: {
                    kind: 'primitive',
                    type: 'number',
                    rawType: 'number',
                },
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'str',
                type: {
                    kind: 'primitive',
                    type: 'string',
                    rawType: 'string',
                },
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'bool',
                type: {
                    kind: 'primitive',
                    type: 'boolean',
                    rawType: 'boolean',
                },
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'never',
                type: {
                    kind: 'primitive',
                    type: 'never',
                    rawType: 'never',
                },
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'symbol',
                type: {
                    kind: 'primitive',
                    type: 'symbol',
                    rawType: 'symbol',
                },
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'void',
                type: {
                    kind: 'primitive',
                    type: 'void',
                    rawType: 'void',
                },
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'any',
                type: {
                    kind: 'primitive',
                    type: 'any',
                    rawType: 'any',
                },
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'literalA',
                type: {
                    kind: 'primitive',
                    type: 'string',
                    rawType: "'A'",
                    literal: 'A',
                },
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'literal1',
                type: {
                    kind: 'primitive',
                    type: 'number',
                    rawType: '1',
                    literal: 1,
                },
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'literalTrue',
                type: {
                    kind: 'primitive',
                    type: 'boolean',
                    rawType: 'true',
                    literal: 'true',
                },
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'opt',
                type: {
                    kind: 'primitive',
                    type: 'number',
                    rawType: 'number',
                },
                orNull: false,
                orUndefined: true,
            },
            {
                name: 'null',
                type: {
                    kind: 'primitive',
                    type: 'number',
                    rawType: 'number | null',
                },
                orNull: true,
                orUndefined: false,
            },
            {
                name: 'undefined',
                type: {
                    kind: 'primitive',
                    type: 'number',
                    rawType: 'number | undefined',
                },
                orNull: false,
                orUndefined: true,
            },
            {
                name: 'undefinedNull',
                type: {
                    kind: 'primitive',
                    type: 'number',
                    rawType: 'number | undefined | null',
                },
                orNull: true,
                orUndefined: true,
            },
            {
                name: 'undefinedNull2',
                type: {
                    kind: 'primitive',
                    type: 'number',
                    rawType: 'number | null',
                },
                orNull: true,
                orUndefined: true,
            },
            {
                name: 'doc',
                doc: 'Doc comment',
                type: {
                    kind: 'primitive',
                    type: 'string',
                    rawType: 'string',
                },
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'int',
                type: {
                    kind: 'primitive',
                    type: 'number',
                    rawType: 'Int',
                },
                orNull: false,
                orUndefined: false,
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
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'date',
                type: {
                    id: 102,
                    kind: 'native',
                    name: 'Date',
                    generics: [],
                },
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'map',
                type: {
                    id: 108,
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
                                id: 102,
                                kind: 'native',
                                name: 'Date',
                                generics: [],
                            },
                        },
                    ],
                },
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'interfaceLiteral',
                type: {
                    id: 109,
                    kind: 'interfaceLiteral',
                    members: [
                        {
                            name: 'a',
                            type: {
                                kind: 'primitive',
                                type: 'number',
                                rawType: 'number',
                            },
                            orNull: false,
                            orUndefined: false,
                        },
                        {
                            name: 'b',
                            type: {
                                id: 110,
                                kind: 'interfaceLiteral',
                                members: [
                                    {
                                        name: 'c',
                                        type: {
                                            id: 111,
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
                                                    orNull: false,
                                                    orUndefined: true,
                                                },
                                            ],
                                        },
                                        orNull: false,
                                        orUndefined: false,
                                    },
                                ],
                            },
                            orNull: false,
                            orUndefined: false,
                        },
                    ],
                },
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
                    kind: 'primitive',
                    type: 'number',
                    rawType: 'number',
                },
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
                    kind: 'primitive',
                    type: 'number',
                    rawType: 'number',
                },
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
                    kind: 'primitive',
                    type: 'number',
                    rawType: 'number',
                },
                orNull: false,
                orUndefined: false,
            },
        ],
    },
    {
        id: 117,
        kind: 'unionLiteral',
        members: [
            {
                id: 113,
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
                            kind: 'primitive',
                            type: 'number',
                            rawType: 'number',
                        },
                        orNull: false,
                        orUndefined: false,
                    },
                ],
            },
        ],
    },
    {
        id: 125,
        kind: 'unionLiteral',
        members: [
            {
                kind: 'primitive',
                type: 'string',
                literal: 'a',
            },
            {
                kind: 'primitive',
                type: 'string',
                literal: 'b',
            },
            {
                kind: 'primitive',
                type: 'string',
                literal: 'c',
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
                    kind: 'unionLiteral',
                    members: [
                        {
                            id: 113,
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
                                        kind: 'primitive',
                                        type: 'number',
                                        rawType: 'number',
                                    },
                                    orNull: false,
                                    orUndefined: false,
                                },
                            ],
                        },
                    ],
                },
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'unionOpt',
                type: {
                    id: 117,
                    kind: 'unionLiteral',
                    members: [
                        {
                            id: 113,
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
                                        kind: 'primitive',
                                        type: 'number',
                                        rawType: 'number',
                                    },
                                    orNull: false,
                                    orUndefined: false,
                                },
                            ],
                        },
                    ],
                },
                orNull: false,
                orUndefined: true,
            },
            {
                name: 'unionabc',
                type: {
                    id: 125,
                    kind: 'unionLiteral',
                    members: [
                        {
                            kind: 'primitive',
                            type: 'string',
                            literal: 'a',
                        },
                        {
                            kind: 'primitive',
                            type: 'string',
                            literal: 'b',
                        },
                        {
                            kind: 'primitive',
                            type: 'string',
                            literal: 'c',
                        },
                    ],
                },
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
                    kind: 'primitive',
                    type: 'number',
                    rawType: 'number',
                },
                args: [],
                orNull: false,
                orUndefined: false,
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
                        orNull: false,
                        orUndefined: false,
                    },
                    {
                        name: 'arg',
                        type: {
                            kind: 'primitive',
                            type: 'string',
                            rawType: 'string',
                        },
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
                    kind: 'primitive',
                    type: 'number',
                    rawType: 'number',
                },
                args: [],
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'optNullableMethod',
                type: {
                    kind: 'primitive',
                    type: 'number',
                    rawType: 'number | null',
                },
                args: [],
                orNull: true,
                orUndefined: false,
            },
            {
                name: 'optNullableUndefinedMethod',
                type: {
                    kind: 'primitive',
                    type: 'number',
                    rawType: 'number | null | undefined',
                },
                args: [],
                orNull: true,
                orUndefined: true,
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
                        orNull: false,
                        orUndefined: true,
                    },
                    {
                        name: 'arg2',
                        type: {
                            kind: 'primitive',
                            type: 'string',
                            rawType: 'string',
                        },
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
                            rawType: 'number | null',
                        },
                        orNull: true,
                        orUndefined: false,
                    },
                    {
                        name: 'arg2',
                        type: {
                            kind: 'primitive',
                            type: 'string',
                            rawType: 'string',
                        },
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
                    kind: 'primitive',
                    type: 'number',
                    rawType: 'number | null',
                },
                args: [
                    {
                        name: 'arg1',
                        type: {
                            kind: 'primitive',
                            type: 'number',
                            rawType: 'number',
                        },
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
                    kind: 'primitive',
                    type: 'string',
                    rawType: 'string',
                },
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
                    kind: 'primitive',
                    type: 'number',
                    rawType: 'number',
                },
                orNull: false,
                orUndefined: false,
            },
            {
                name: 'c',
                type: {
                    kind: 'primitive',
                    type: 'string',
                    rawType: 'string',
                },
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
                            kind: 'primitive',
                            type: 'number',
                            rawType: 'number',
                        },
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
                            kind: 'primitive',
                            type: 'number',
                            rawType: 'number',
                        },
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
                kind: 'primitive',
                type: 'number',
                literal: 0,
            },
            {
                kind: 'primitive',
                type: 'number',
                literal: 2,
            },
            {
                kind: 'primitive',
                type: 'string',
                literal: 'C',
            },
        ],
    },
];
