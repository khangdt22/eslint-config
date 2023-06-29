import { AST_NODE_TYPES, ASTUtils, ESLintUtils } from '@typescript-eslint/utils'

export default ESLintUtils.RuleCreator.withoutDocs({
    meta: {
        type: 'layout',
        fixable: 'code',
        schema: [],
        messages: { unexpectedNewLine: 'Unexpected newline between empty arrow function body' },
    },
    defaultOptions: [],
    create({ getSourceCode, report }) {
        return {
            [AST_NODE_TYPES.ArrowFunctionExpression](node) {
                const source = getSourceCode()
                const inlineComments = source.getCommentsInside(node.body)

                if (inlineComments.length === 0 && node.body.type == 'BlockStatement' && node.body.body.length === 0) {
                    const openBracket = source.getFirstToken(node.body)
                    const closeBracket = source.getLastToken(node.body)

                    if (openBracket && closeBracket && !ASTUtils.isTokenOnSameLine(openBracket, closeBracket)) {
                        report({
                            node,
                            loc: node.body.loc,
                            messageId: 'unexpectedNewLine',
                            fix: (fixer) => fixer.replaceTextRange(node.body.range, '{}'),
                        })
                    }
                }
            },
        }
    },
})
