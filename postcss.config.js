const production = process.env.NODE_ENV !== 'development';

const purgecss = require('@fullhuman/postcss-purgecss')({

    // Specify the paths to all of the template files in your project
    content: [
        './src/**/*.svelte',
        './src/**/*.html'
    ],

    whitelistPatterns: [/svelte-/],

    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

const postcssPlugins = () => {
    return [
        require('postcss-import')(),
        require('postcss-url')(),
        require('tailwindcss')('./tailwind.config.js'),
        require('autoprefixer')(),
        purgecss,
        !dev && require('cssnano')({preset: 'default'}),
    ].filter(Boolean);
};


module.exports = {
    plugins: [
        require('tailwindcss'),
        ...(production ? [postcssPlugins] : [])
    ]
};

console.log("Am I in prod? >> " + production);
