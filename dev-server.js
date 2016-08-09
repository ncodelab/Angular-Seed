const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.config.js');
const compiler = webpack(config);

const server = new webpackDevServer(compiler, {
  'quiet': false,
  'stats': { 'colors': true },
  'hot': true,
  'inline': true,
  'contentBase': 'public/',
  'compress': true,
  'publicPath': '/'
});
server.listen(8080);
