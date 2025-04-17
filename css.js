module.exports = {
    extends: ['stylelint-config-standard', '@stylistic/stylelint-config'],
    rules: {
        'function-url-quotes': [
            'always',
            {
                except: ['empty'],
            },
        ],
        'selector-max-compound-selectors': 4,
        'comment-word-disallowed-list': ['dupa'],
        'max-nesting-depth': [3, { ignore: ['blockless-at-rules'] }],
        'no-unknown-animations': [true, { severity: 'warning' }],
        'color-named': 'never',
        '@stylistic/max-line-length': 140,
        '@stylistic/number-leading-zero': 'never',
        '@stylistic/string-quotes': 'single',
        '@stylistic/indentation': 4,
        '@stylistic/named-grid-areas-alignment': true,
        '@stylistic/at-rule-semicolon-space-before': 'never',
    },
};
