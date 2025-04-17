module.exports = {
    overrides: [
        {
            files: ['**/*.scss', '**/*.sass', '**/*.css'],
            ...require('./css'),
        },
        {
            files: ['**/*.scss', '**/*.sass'],
            ...require('./sass'),
        },
        {
            files: ['**/*.styl'],
            ...require('./stylus'),
        },
    ],
};
