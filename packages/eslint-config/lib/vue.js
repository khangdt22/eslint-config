const { isPackageExists, getPackageInfoSync } = require('local-pkg')
const semverGte = require('semver/functions/gte')
const semverLt = require('semver/functions/lt')

const hasTypescript = isPackageExists('typescript')
const vueVersion = getPackageInfoSync('vue')?.version

function getPreset() {
    if (semverGte(vueVersion, '3.0.0') && semverLt(vueVersion, '4.0.0')) {
        return 'plugin:vue/vue3-recommended'
    }

    if (semverGte(vueVersion, '2.0.0') && semverLt(vueVersion, '3.0.0')) {
        return 'plugin:vue/recommended'
    }

    return 'plugin:vue/base'
}

/** @type {import('eslint').Linter.Config} */
module.exports = {
    extends: [hasTypescript ? './typescript' : './base'],
    overrides: [
        {
            files: ['*.vue'],
            extends: [getPreset()],
            parserOptions: hasTypescript ? { parser: '@typescript-eslint/parser' } : {},
            rules: {
                'vue/no-unsupported-features': ['error', { version: vueVersion }],
            },
        },
    ],
}
