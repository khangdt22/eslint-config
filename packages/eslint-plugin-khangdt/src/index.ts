import importSingleLine from './rules/import-single-line'
import arrowEmptyBodyNewline from './rules/arrow-empty-body-newline'
import objectCurlyNewline from './rules/object-curly-newline'

export default {
    rules: {
        'arrow-empty-body-newline': arrowEmptyBodyNewline,
        'import-single-line': importSingleLine,
        'object-curly-newline': objectCurlyNewline,
    },
}
