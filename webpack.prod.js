const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  devServer: {
    compress: true,
    inline: true,
    allowedHosts: [
      '.herokuapp.com'
  ]
  }
})