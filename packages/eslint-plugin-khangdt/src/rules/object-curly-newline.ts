import { ASTUtils, ESLintUtils } from '@typescript-eslint/utils'
import { getEslintCoreRule } from '../utils'

const baseRule = getEslintCoreRule('object-curly-newline')

export default ESLintUtils.RuleCreator.withoutDocs({
    meta: baseRule.meta,
    defaultOptions: [
        {
            ObjectExpression: { multiline: true },
            ObjectPattern: 'never',
            ImportDeclaration: 'never',
            ExportDeclaration: 'never',
        },
    ],
    create(context, optionsWithDefault) {
        function getRules(opts) {
            const contextWithDefaults = Object.create(context, {
                options: {
                    writable: false,
                    configurable: false,
                    value: opts,
                },
            })

            return baseRule.create(contextWithDefaults)
        }

        const rules = getRules(optionsWithDefault)
        const options: any = optionsWithDefault[0] ?? {}
        const minProperties = options.ObjectExpression?.minProperties ?? Number.POSITIVE_INFINITY

        return {
            ...rules,
            ObjectExpression(node) {
                if (options == 'always' || options == 'never' || !options.ObjectExpression?.multiline) {
                    return rules.ObjectExpression(node)
                }

                if (node.properties.length >= minProperties) {
                    return rules.ObjectExpression(node)
                }

                const source = context.getSourceCode()

                const openBrace = source.getFirstToken(node, (token) => token.value === '{')!
                const closeBrace = source.getLastToken(node, (token) => token.value === '}')!

                let first = source.getTokenAfter(openBrace, { includeComments: true })!
                let last = source.getTokenBefore(closeBrace, { includeComments: true })!

                if (!(node.properties.length > 0 && first.loc.start.line !== last.loc.end.line)) {
                    first = source.getTokenAfter(openBrace)!
                    last = source.getTokenBefore(closeBrace)!

                    const hasLineBreakBetweenOpenBraceAndFirst = !ASTUtils.isTokenOnSameLine(openBrace, first)
                    const hasLineBreakBetweenCloseBraceAndLast = !ASTUtils.isTokenOnSameLine(last, closeBrace)

                    if (hasLineBreakBetweenOpenBraceAndFirst || hasLineBreakBetweenCloseBraceAndLast) {
                        return getRules(['always']).ObjectExpression(node)
                    }
                }

                return rules.ObjectExpression(node)
            },
        }
    },
})
