const WebpackStripLoader = require('strip-loader');
const devConfig = require('./webpack.config.js');
const stripLoader = {
  'test': [/\.js$/],
  'exclude': /node_modules/,
  'loader': WebpackStripLoader.loader('console.log')
};

devConfig.module.loaders.push(stripLoader);
module.exports = devConfig;
