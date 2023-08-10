// const withCss = require('@zeit/next-css')
// const withPurgeCss = require('next-purgecss')

// module.exports = {
//   postcssPlugin: 'postcss-',
//   reactStrictMode: false,
//   AtRule (atRule) {
//     if (atRule.every(child => child.selector !== '.test')) {
//       atRule.append({ selector: '.test' })
//     }
//   },
//   images: {
//     loader: 'imgix',
//     path: 'https://cdn.pegasus.imarticus.org',
//   },
//   experimental:{
//     amp: {
//       skipValidation: true
//     }
//   },
//   trailingSlash : true,
//   postcss : true
// }

module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
    [
      '@fullhuman/postcss-purgecss',
      {
        content: [
          './pages/**/*.{js,jsx,ts,tsx}',
          './components/**/*.{js,jsx,ts,tsx}',
        ],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: ['html', 'body'],
      },
    ],
  ],

  AtRule(atRule) {
    if (atRule.every((child) => child.selector !== '.test')) {
      atRule.append({ selector: '.test' })
    }
  },
  trailingSlash: true,
  images: {
    loader: 'imgix',
    path: 'https://cdn.pegasus.imarticus.org',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
}
