import { AST_NODE_TYPES, ESLintUtils } from '@typescript-eslint/utils'

const LINE_BREAK_REGEX = /[\n\r]+/

export default ESLintUtils.RuleCreator.withoutDocs({
    meta: {
        type: 'layout',
        docs: {
            description: 'Disallow line break in the import statement.',
            recommended: 'warn',
        },
        fixable: 'code',
        schema: [],
        messages: { unexpectedLineBreak: 'Remove line break in the import statement' },
    },
    defaultOptions: [],
    create({ getSourceCode, report }) {
        return {
            [AST_NODE_TYPES.ImportDeclaration](node) {
                const source = getSourceCode().getText(node)

                if (!LINE_BREAK_REGEX.test(source)) {
                    return
                }

                report({
                    node,
                    messageId: 'unexpectedLineBreak',
                    fix: (fixer) => fixer.replaceText(node, source.replace(LINE_BREAK_REGEX, '')),
                })
            },
        }
    },
})
