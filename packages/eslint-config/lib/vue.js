const { isPackageExists, getPackageInfoSync } = require('local-pkg')
const semverGte = require('semver/functions/gte')
const semverLt = require('semver/functions/lt')
const { settings } = require('./typescript')

const hasTypescript = isPackageExists('typescript')
const vueVersion = getPackageInfoSync('vue')?.version

const isVue3 = semverGte(vueVersion, '3.0.0') && semverLt(vueVersion, '4.0.0')
const isVue2 = semverGte(vueVersion, '2.0.0') && semverLt(vueVersion, '3.0.0')

function getPreset() {
    return isVue3 ? 'plugin:vue/vue3-recommended' : isVue2 ? 'plugin:vue/recommended' : 'plugin:vue/base'
}

/** @type {import('eslint').Linter.Config} */
module.exports = {
    extends: [hasTypescript ? './typescript' : './base'],
    overrides: [
        {
            files: ['*.vue'],
            extends: [getPreset()],
            parserOptions: hasTypescript ? { parser: '@typescript-eslint/parser' } : {},
            settings: {
                'import/extensions': [...settings['import/extensions'], '.vue'],
            },
            rules: {
                'indent': 'off',
                '@typescript-eslint/indent': 'off',

                'vue/block-tag-newline': ['warn', { maxEmptyLines: 1 }],
                'vue/component-api-style': [
                    'warn',
                    isVue3 ? ['script-setup', 'composition'] : ['options', 'composition-vue2'],
                ],
                'vue/component-name-in-template-casing': 'warn',
                'vue/component-options-name-casing': 'warn',
                'vue/custom-event-name-casing': ['warn', isVue3 ? 'camelCase' : 'kebab-case'],
                'vue/define-macros-order': [
                    'warn',
                    { order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'] },
                ],
                'vue/html-button-has-type': 'error',
                'vue/html-comment-content-newline': 'warn',
                'vue/html-comment-content-spacing': 'warn',
                'vue/html-comment-indent': ['warn', 4],
                'vue/no-empty-component-block': 'warn',
                'vue/no-multiple-objects-in-class': 'warn',
                'vue/no-ref-object-destructure': 'error',
                'vue/no-required-prop-with-default': ['warn', { autofix: true }],
                'vue/no-this-in-before-route-enter': 'error',
                'vue/no-unsupported-features': ['error', { version: vueVersion }],
                'vue/no-useless-mustaches': 'warn',
                'vue/no-useless-v-bind': 'warn',
                'vue/padding-line-between-blocks': 'warn',
                'vue/padding-lines-in-component-definition': 'warn',
                'vue/prefer-define-options': isVue3 ? 'error' : 'off',
                'vue/prefer-prop-type-boolean-first': 'error',
                'vue/prefer-separate-static-class': 'warn',
                'vue/prefer-true-attribute-shorthand': 'warn',
                'vue/require-direct-export': 'warn',
                'vue/require-emit-validator': 'error',
                'vue/require-macro-variable-name': 'warn',
                'vue/require-name-property': 'error',
                'vue/require-typed-ref': 'error',
                'vue/script-indent': ['warn', 4, { baseIndent: 1, switchCase: 1 }],
                'vue/v-for-delimiter-style': 'warn',
                'vue/valid-define-options': 'error',

                'vue/array-bracket-newline': ['warn', 'never'],
                'vue/array-bracket-spacing': ['warn', 'never'],
                'vue/array-element-newline': ['warn', 'never'],
                'vue/arrow-spacing': ['warn', 'both'],
                'vue/block-spacing': ['warn', 'always'],
                'vue/brace-style': ['warn', '1tbs', { allowSingleLine: true }],
                'vue/comma-dangle': ['warn', 'never'],
                'vue/comma-spacing': ['warn', 'after'],
                'vue/comma-style': ['warn', 'last'],
                'vue/dot-location': ['warn', 'property'],
                'vue/func-call-spacing': ['warn', 'never'],
                'vue/key-spacing': 'warn',
                'vue/keyword-spacing': 'warn',
                'vue/max-len': [
                    'warn',
                    {
                        code: 120,
                        ignoreComments: false,
                        ignoreTrailingComments: true,
                        ignoreUrls: true,
                        ignoreStrings: true,
                        ignoreTemplateLiterals: true,
                        ignoreRegExpLiterals: true,
                        ignoreHTMLAttributeValues: true,
                        ignoreHTMLTextContents: true,
                    },
                ],
                'vue/multiline-ternary': ['warn', 'never'],
                'vue/no-console': 'error',
                'vue/no-constant-condition': 'warn',
                'vue/no-empty-pattern': 'warn',
                'vue/no-loss-of-precision': 'warn',
                'vue/object-curly-newline': ['warn', 'never'],
                'vue/object-curly-spacing': ['warn', 'always'],
                'vue/object-property-newline': ['warn', 'never'],
                'vue/object-shorthand': ['warn', 'properties', { avoidQuotes: true }],
                'vue/operator-linebreak': ['warn', 'none'],
                'vue/quote-props': ['warn', 'consistent-as-needed'],
                'vue/space-in-parens': ['warn', 'never'],
                'vue/space-infix-ops': 'warn',
                'vue/space-unary-ops': 'warn',
                'vue/template-curly-spacing': 'warn',
            },
        },
    ],
}
