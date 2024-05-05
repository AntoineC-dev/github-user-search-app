const autoprefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');
const postcssGlobalData = require('@csstools/postcss-global-data');

const config = {
  plugins: [
    postcssGlobalData({
      files: ['src/lib/styles/custom-media-queries.css'],
    }),
    postcssPresetEnv({
      stage: 3,
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
      },
    }),
    autoprefixer(),
  ],
};

module.exports = config;
