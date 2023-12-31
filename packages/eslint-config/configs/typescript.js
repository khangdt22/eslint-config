const { join } = require('path')
const { existsSync } = require('fs')
const { rules: baseRules } = require('./base')

const tsconfig = process.env.ESLINT_TSCONFIG || 'tsconfig.json'
const tsconfigPath = join(process.cwd(), tsconfig)
const isTsConfigExists = existsSync(tsconfigPath)

const jsExtensions = ['.js', '.jsx', '.mjs', '.cjs']
const tsExtensions = ['.ts', '.tsx', '.mts', '.cts']
const allExtensions = [...jsExtensions, ...tsExtensions]

const requiringTypeCheckingRules = {
    'no-throw-literal': 'off',

    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/consistent-type-exports': 'warn',
    '@typescript-eslint/explicit-member-accessibility': 'warn',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-duplicate-type-constituents': 'warn',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-mixed-enums': 'warn',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',
    '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-enum-comparison': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/prefer-includes': 'warn',
    '@typescript-eslint/prefer-readonly': 'warn',
    '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
    '@typescript-eslint/prefer-regexp-exec': 'warn',
    '@typescript-eslint/prefer-return-this-type': 'warn',
    '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
    '@typescript-eslint/require-array-sort-compare': ['warn', { ignoreStringArrays: true }],
    '@typescript-eslint/restrict-plus-operands': ['warn', { allowAny: true, allowNumberAndString: true }],
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-throw-literal': ['warn', { allowThrowingAny: true, allowThrowingUnknown: true }],
    '@typescript-eslint/require-await': 'off',
}

/** @type {import('eslint').Linter.Config} */
module.exports = {
    extends: ['./base', 'plugin:import/typescript', 'plugin:@typescript-eslint/recommended'],
    plugins: ['@typescript-eslint'],
    parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
    },
    settings: {
        'import/extensions': allExtensions,
        'import/parsers': {
            '@typescript-eslint/parser': tsExtensions,
        },
        'import/resolver': {
            node: { extensions: allExtensions },
            typescript: {
                extensions: tsExtensions,
                project: tsconfigPath,
            },
        },
    },
    overrides: [
        {
            files: tsExtensions.map((ext) => `*${ext}`),
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: [tsconfig],
                tsconfigRootDir: process.cwd(),
            },
            extends: isTsConfigExists ? ['plugin:@typescript-eslint/recommended-requiring-type-checking'] : [],
            rules: isTsConfigExists ? requiringTypeCheckingRules : {},
        },
    ],
    rules: {
        'block-spacing': 'off',
        'brace-style': 'off',
        'comma-dangle': 'off',
        'comma-spacing': 'off',
        'default-param-last': 'off',
        'func-call-spacing': 'off',
        'indent': 'off',
        'key-spacing': 'off',
        'keyword-spacing': 'off',
        'lines-around-comment': 'off',
        'lines-between-class-members': 'off',
        'no-dupe-class-members': 'off',
        'no-redeclare': 'off',
        'no-unused-expressions': 'off',
        'object-curly-spacing': 'off',
        'padding-line-between-statements': 'off',
        'quotes': 'off',
        'semi': 'off',
        'space-before-blocks': 'off',
        'space-before-function-paren': 'off',
        'space-infix-ops': 'off',
        '@typescript-eslint/array-type': ['warn', { default: 'array-simple' }],
        '@typescript-eslint/ban-tslint-comment': 'warn',
        '@typescript-eslint/consistent-generic-constructors': 'warn',
        '@typescript-eslint/member-delimiter-style': ['warn', { multiline: { delimiter: 'none' } }],
        '@typescript-eslint/no-duplicate-enum-values': 'warn',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-import-type-side-effects': 'warn',
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'warn',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unsafe-declaration-merging': 'warn',
        '@typescript-eslint/no-useless-empty-export': 'warn',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/prefer-for-of': 'warn',
        '@typescript-eslint/prefer-function-type': 'warn',
        '@typescript-eslint/prefer-literal-enum-member': 'warn',
        '@typescript-eslint/prefer-optional-chain': 'warn',
        '@typescript-eslint/prefer-ts-expect-error': 'warn',
        '@typescript-eslint/type-annotation-spacing': 'warn',
        '@typescript-eslint/block-spacing': 'warn',
        '@typescript-eslint/brace-style': 'warn',
        '@typescript-eslint/comma-dangle': [
            'warn',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'never',
                exports: 'never',
                functions: 'never',
                enums: 'always-multiline',
                generics: 'never',
                tuples: 'always-multiline',
            },
        ],
        '@typescript-eslint/comma-spacing': 'warn',
        '@typescript-eslint/default-param-last': 'warn',
        '@typescript-eslint/func-call-spacing': 'warn',
        '@typescript-eslint/indent': [
            'warn',
            4,
            {
                SwitchCase: 1,
                ignoredNodes: ['TSTypeReference > TSTypeReference'],
            },
        ],
        '@typescript-eslint/key-spacing': 'warn',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/keyword-spacing': 'off',
        '@typescript-eslint/lines-around-comment': [
            'warn',
            {
                beforeBlockComment: true,
                beforeLineComment: true,
                allowBlockStart: true,
                allowClassStart: true,
                allowObjectStart: true,
                allowArrayStart: true,
                allowEnumStart: true,
                allowInterfaceStart: true,
                allowModuleStart: true,
                allowTypeStart: true,
            },
        ],
        '@typescript-eslint/lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
        '@typescript-eslint/no-dupe-class-members': 'warn',
        '@typescript-eslint/no-redeclare': 'warn',
        '@typescript-eslint/no-unused-expressions': 'warn',
        '@typescript-eslint/object-curly-spacing': ['warn', 'always'],
        '@typescript-eslint/padding-line-between-statements': [
            ...baseRules['padding-line-between-statements'],
            {
                blankLine: 'always',
                prev: '*',
                next: 'interface',
            },
            {
                blankLine: 'always',
                prev: 'interface',
                next: '*',
            },
        ],
        '@typescript-eslint/quotes': ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
        '@typescript-eslint/semi': ['warn', 'never'],
        '@typescript-eslint/space-before-blocks': 'warn',
        '@typescript-eslint/space-before-function-paren': [
            'warn',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        '@typescript-eslint/space-infix-ops': 'warn',
    },
}
