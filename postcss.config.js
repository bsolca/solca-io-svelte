const postcssPlugins = (purgecss = false) => {
    return [
        require('postcss-import')(),
        require('postcss-url')(),
        require('tailwindcss')('./tailwind.config.js'),
        require('autoprefixer')(),
        purgecss &&
        require('@fullhuman/postcss-purgecss')({
            content: ['./src/**/*.svelte', './src/**/*.html'],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
        }),
        !dev && require('cssnano')({preset: 'default'}),
    ].filter(Boolean);
};

const production = process.env.NODE_ENV !== 'development';

module.exports = {
    plugins: [
        require('tailwindcss'),
        ...(production ? [postcssPlugins] : [])
    ]
};
