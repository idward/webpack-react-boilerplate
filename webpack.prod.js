const merge = require('webpack-merge');
const common = require('./webpack.common');

const webpackProd = merge(common, {
  mode: 'production'
});

module.exports = webpackProd;
