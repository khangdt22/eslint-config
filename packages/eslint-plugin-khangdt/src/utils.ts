import { ESLintUtils } from '@typescript-eslint/utils'

export function getEslintCoreRule(ruleName: string) {
    return ESLintUtils.nullThrows(
        require('eslint/use-at-your-own-risk').builtinRules.get(ruleName),
        `ESLint's core rule '${ruleName}' not found.`
    )
}
