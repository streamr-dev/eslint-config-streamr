const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint')
const promise = require('eslint-plugin-promise')
const stylistic = require('@stylistic/eslint-plugin')

module.exports = tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    promise.configs['flat/recommended'],
    {
        name: 'streamr-typescript',
        plugins: {
            '@stylistic': stylistic,
            promise,
        },
        rules: {
            'arrow-parens': ['error', 'always'],
            'curly': ['error', 'all'],
            'indent': ['error', 4, {
                SwitchCase: 1
            }],
            'max-classes-per-file': 'off',
            'max-len': ['error', {
                code: 150
            }],
            'newline-per-chained-call': 'off',
            'no-console': ['warn', {
                allow: ['warn', 'error', 'info']
            }],
            'no-debugger': 'warn',
            'no-multiple-empty-lines': ['error', {
                max: 1,
                maxBOF: 0
            }],
            'no-underscore-dangle': 'error',
            'object-curly-newline': 'off',
            'quote-props': 'off',
            'require-atomic-updates': 'error',
            'semi': ['error', 'never'],
            '@typescript-eslint/consistent-generic-constructors': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'error',
            '@typescript-eslint/no-empty-function': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/no-unused-vars': ['error', {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_'
            }],
            '@typescript-eslint/prefer-regexp-exec': 'off',
            '@stylistic/type-annotation-spacing': 'error',
            'promise/always-return': 'warn',
            'promise/catch-or-return': ['error', {
                allowThen: true
            }],
            'promise/no-callback-in-promise': 'off'
        },
        languageOptions: {
            parserOptions: {
                projectService: true
            }
        }
    },
    {
        files: ['**/*.js'],
        rules: {
            '@typescript-eslint/no-var-requires': 'off'
        }
    }
)