const merge = require('webpack-merge');
const common = require('./webpack.common');

const webpackDev = merge(common, {
  mode: 'development',
  devServer: {
    port: 3000,
    open: true,
  },
})

module.exports = webpackDev;
