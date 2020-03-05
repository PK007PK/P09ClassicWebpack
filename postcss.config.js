const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');

module.exports = ctx => {
  return {
    plugins: [
      require('autoprefixer'),
      ...(ctx.options.env === 'production'
        ? [
            // cssnano({
            //   preset: 'default',
            // }),

            // https://github.com/FullHuman/purgecss-docs/blob/master/configuration.md
            purgecss({
              content: ['./**/*.html'],
              keyframes: true,
              fontFace: true,
              css: ['style.[contentHash].css'],
              defaultExtractor: content => content.match(/[A-z0-9-:/]+/g),
              ignore: [
                'src/styles/carousel/',
                'src/styles/04_components/_rc-hamburgerMenu-v0.scss',
                'hamburger--active',
                'navigation--active',
              ],
              whitelist: ['hamburger--active', 'navigation--active'],
            }),
          ]
        : []),
    ],
  };
};
