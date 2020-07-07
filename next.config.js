const webpack = require('webpack');
const withCSS = require('@zeit/next-css');
const { parsed: localEnv } = require('dotenv').config();

function HACK_removeMinimizeOptionFromCssLoaders(config) {
  console.warn(
    'HACK: Removing `minimize` option from `css-loader` entries in Webpack config',
  );
  config.module.rules.forEach(rule => {
    if (Array.isArray(rule.use)) {
      rule.use.forEach(u => {
        if (u.loader === 'css-loader' && u.options) {
          delete u.options.minimize;
        }
      });
    }
  });
}

module.exports = withCSS({
  webpack: config => {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    });
      
    HACK_removeMinimizeOptionFromCssLoaders(config);
    return config;
  },
});