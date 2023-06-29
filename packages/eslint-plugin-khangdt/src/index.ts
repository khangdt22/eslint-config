import importSingleLine from './rules/import-single-line'
import arrowEmptyBodyNewline from './rules/arrow-empty-body-newline'

export default {
    rules: {
        'arrow-empty-body-newline': arrowEmptyBodyNewline,
        'import-single-line': importSingleLine,
    },
}
