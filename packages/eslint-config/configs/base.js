/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2022,
        ecmaFeatures: {
            jsx: true,
        },
    },
    reportUnusedDisableDirectives: true,
    extends: [
        'eslint:recommended',
        'plugin:n/recommended',
        'plugin:sonarjs/recommended',
        'plugin:unicorn/recommended',
        'plugin:import/recommended',
        'plugin:promise/recommended',
    ],
    plugins: ['sonarjs', 'unicorn', 'promise', 'import', 'khangdt'],
    globals: {
        document: 'readonly',
        navigator: 'readonly',
        window: 'readonly',
    },
    overrides: [
        {
            files: ['database/**/*.{js,ts}'],
            rules: {
                'unicorn/filename-case': 'off',
            },
        },
    ],
    rules: {
        'no-fallthrough': ['warn', { allowEmptyCase: true }],
        'no-self-compare': 'warn',
        'no-unused-private-class-members': 'warn',
        'block-scoped-var': 'warn',
        'curly': ['warn', 'all'],
        'default-case-last': 'warn',
        'default-param-last': 'warn',
        'grouped-accessor-pairs': 'warn',
        'logical-assignment-operators': 'warn',
        'no-confusing-arrow': 'warn',
        'no-else-return': ['warn', { allowElseIf: true }],
        'no-empty': ['warn', { allowEmptyCatch: true }],
        'no-extra-label': 'warn',
        'no-floating-decimal': 'warn',
        'no-implied-eval': 'warn',
        'no-label-var': 'warn',
        'no-throw-literal': 'warn',
        'no-undef-init': 'warn',
        'no-unneeded-ternary': 'warn',
        'no-unused-expressions': 'warn',
        'no-useless-call': 'warn',
        'no-useless-computed-key': ['warn', { enforceForClassMembers: true }],
        'no-useless-rename': 'warn',
        'no-var': 'warn',
        'object-shorthand': ['warn', 'properties', { avoidQuotes: true }],
        'operator-assignment': 'warn',
        'prefer-const': ['warn', { destructuring: 'all' }],
        'prefer-exponentiation-operator': 'warn',
        'prefer-promise-reject-errors': ['warn', { allowEmptyReject: true }],
        'prefer-regex-literals': 'warn',
        'prefer-rest-params': 'warn',
        'quote-props': ['warn', 'consistent-as-needed'],
        'spaced-comment': 'warn',
        'symbol-description': 'warn',
        'vars-on-top': 'warn',
        'yoda': 'warn',
        'array-bracket-newline': ['warn', 'consistent'],
        'array-bracket-spacing': 'warn',
        'array-element-newline': ['warn', 'consistent'],
        'arrow-parens': ['warn', 'always'],
        'arrow-spacing': 'warn',
        'block-spacing': 'warn',
        'brace-style': 'warn',
        'comma-dangle': [
            'warn',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'never',
                exports: 'never',
                functions: 'always-multiline',
            },
        ],
        'comma-spacing': 'warn',
        'comma-style': 'warn',
        'computed-property-spacing': 'warn',
        'dot-location': ['warn', 'property'],
        'eol-last': 'warn',
        'func-call-spacing': 'warn',
        'function-call-argument-newline': ['warn', 'consistent'],
        'function-paren-newline': ['warn', 'multiline-arguments'],
        'generator-star-spacing': ['warn', 'both'],
        'implicit-arrow-linebreak': 'warn',
        'indent': ['warn', 4, { SwitchCase: 1 }],
        'jsx-quotes': 'warn',
        'key-spacing': 'warn',
        'keyword-spacing': 'warn',
        'linebreak-style': 'warn',
        'lines-around-comment': [
            'warn',
            {
                beforeBlockComment: true,
                beforeLineComment: true,
                allowBlockStart: true,
                allowClassStart: true,
                allowObjectStart: true,
                allowArrayStart: true,
            },
        ],
        'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
        'max-len': [
            'warn',
            {
                code: 120,
                ignoreComments: false,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            },
        ],
        'multiline-ternary': ['warn', 'never'],
        'new-parens': 'warn',
        'no-multi-spaces': 'warn',
        'no-multiple-empty-lines': ['warn', { max: 2, maxBOF: 0, maxEOF: 1 }],
        'no-tabs': 'warn',
        'no-trailing-spaces': 'warn',
        'no-whitespace-before-property': 'warn',
        'nonblock-statement-body-position': ['warn', 'below'],
        'object-curly-spacing': ['warn', 'always'],
        'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
        'operator-linebreak': ['warn', 'after'],
        'padded-blocks': ['warn', 'never'],
        'padding-line-between-statements': [
            'warn',
            {
                blankLine: 'never',
                prev: '*',
                next: ['break', 'default'],
            },
            { blankLine: 'never', prev: ['break', 'case', 'default'], next: '*' },
            {
                blankLine: 'never',
                prev: 'switch',
                next: 'case',
            },
            {
                blankLine: 'always',
                prev: [
                    'directive',
                    'for',
                    'function',
                    'if',
                    'import',
                    'multiline-block-like',
                    'multiline-const',
                    'multiline-let',
                    'multiline-var',
                    'switch',
                ],
                next: '*',
            },
            {
                blankLine: 'always',
                prev: '*',
                next: [
                    'do',
                    'export',
                    'for',
                    'function',
                    'if',
                    'multiline-block-like',
                    'multiline-const',
                    'multiline-let',
                    'multiline-var',
                    'return',
                    'switch',
                    'try',
                    'while',
                ],
            },
            { blankLine: 'never', prev: 'import', next: 'import' },
        ],
        'quotes': ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
        'rest-spread-spacing': 'warn',
        'semi': ['warn', 'never'],
        'semi-spacing': 'warn',
        'semi-style': 'warn',
        'space-before-blocks': 'warn',
        'space-before-function-paren': ['warn', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
        'space-in-parens': 'warn',
        'space-infix-ops': 'warn',
        'space-unary-ops': 'warn',
        'switch-colon-spacing': 'warn',
        'template-curly-spacing': 'warn',
        'template-tag-spacing': 'warn',
        'unicode-bom': 'warn',
        'yield-star-spacing': ['warn', 'both'],

        'n/no-missing-import': 'off',
        'n/no-missing-require': 'off',
        'n/no-unpublished-import': 'off',
        'n/no-unpublished-require': 'off',
        'n/no-process-exit': 'off',
        'n/no-path-concat': 'error',
        'n/shebang': 'off',

        'sonarjs/cognitive-complexity': 'off',
        'sonarjs/no-duplicate-string': 'off',

        'unicorn/consistent-destructuring': 'off',
        'unicorn/consistent-function-scoping': ['error', { checkArrowFunctions: false }],
        'unicorn/filename-case': [
            'warn',
            {
                cases: {
                    kebabCase: true,
                    pascalCase: true,
                },
            },
        ],
        'unicorn/new-for-builtins': 'off',
        'unicorn/no-array-reduce': 'off',
        'unicorn/no-await-expression-member': 'off',
        'unicorn/no-array-callback-reference': 'off',
        'unicorn/no-array-push-push': 'off',
        'unicorn/no-empty-file': 'off',
        'unicorn/no-null': 'off',
        'unicorn/no-process-exit': 'off',
        'unicorn/prefer-event-target': 'off',
        'unicorn/prefer-top-level-await': 'off',
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/prefer-module': 'off',
        'unicorn/switch-case-braces': ['warn', 'avoid'],
        'unicorn/require-number-to-fixed-digits-argument': 'off',

        'promise/always-return': 'off',
        'promise/catch-or-return': 'off',
        'promise/no-callback-in-promise': 'off',
        'promise/no-multiple-resolved': 'error',

        'import/newline-after-import': 'warn',
        'import/namespace': 'off',
        'import/no-deprecated': 'warn',
        'import/no-duplicates': 'off',
        'import/no-mutable-exports': 'error',
        'import/no-named-default': 'warn',
        'import/no-webpack-loader-syntax': 'error',
        'import/no-empty-named-blocks': 'warn',
        'import/no-extraneous-dependencies': 'error',
        'import/no-unresolved': 'off',
        'import/no-unused-modules': 'warn',
        'import/no-self-import': 'error',
        'import/no-useless-path-segments': 'warn',
        'import/extensions': ['warn', 'never'],
        'import/first': 'warn',
        'import/order': 'warn',

        'khangdt/arrow-empty-body-newline': 'warn',
        'khangdt/import-single-line': 'warn',
        'khangdt/object-curly-newline': 'warn',
    },
}
