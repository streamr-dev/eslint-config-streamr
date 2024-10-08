const DISABLED = 0
const WARN = 1
const ERROR = 2

module.exports = exports = {
    parser: '@typescript-eslint/parser',
    plugins: [
        '@stylistic'
    ],
    extends: [
        'plugin:promise/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        'arrow-parens': [ERROR, 'always'],
        'curly': [ERROR, 'all'],
        'indent': [ERROR, 4, {
            "SwitchCase": 1
        }],
        'no-console': [WARN, { allow: ['warn', 'error', 'info'] }],
        'no-debugger': WARN,
        'no-multiple-empty-lines': [ERROR, {
            max: 1,
            maxBOF: 0,
        }],
        'no-underscore-dangle': ERROR,
        'require-atomic-updates': ERROR,
        'semi': [ERROR, 'never'],
        'newline-per-chained-call': DISABLED,
        'max-len': [ERROR, {
            code: 150
        }],
        'max-classes-per-file': DISABLED,
        'promise/always-return': WARN,
        'quote-props': DISABLED,
        'object-curly-newline': DISABLED,
        'promise/no-callback-in-promise': DISABLED,
        'promise/catch-or-return': ["error", {
            "allowThen": true
        }],
        '@typescript-eslint/explicit-module-boundary-types': "error",
        '@stylistic/type-annotation-spacing': "error",
        '@typescript-eslint/no-unused-vars': [ERROR, {
            'argsIgnorePattern': '^_',
            'varsIgnorePattern': '^_'
        }],
        '@typescript-eslint/no-explicit-any': DISABLED,
        '@typescript-eslint/no-empty-function': DISABLED,
        '@typescript-eslint/no-non-null-assertion': DISABLED
    },
    'overrides': [
        {
            'files': ['*.js'],
            'rules': {
                '@typescript-eslint/no-var-requires': DISABLED
            }
        }
    ]
}
