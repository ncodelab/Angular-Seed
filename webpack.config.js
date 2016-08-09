'use strict';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin').default;

const MODULES_DIR = path.resolve(__dirname, 'node_modules');
const SOURCE_DIR = path.resolve(__dirname, 'src');
const ASSETS_DIR = path.resolve(__dirname, 'assets');
const OUTPUT_DIR = path.resolve(__dirname, 'public');

module.exports = {
  'target': 'web',
  'entry': path.resolve(SOURCE_DIR, 'app.js'),
  'output': {
    'path': OUTPUT_DIR,
    'filename': 'js/bundle.js'
  },
  'context': SOURCE_DIR,
  'devServer': {
    // This is required for webpack-dev-server. The path should
    // be an absolute path to your build destination.
    'outputPath': OUTPUT_DIR,
    'proxy': {
      '/common/*': {
        'rewrite': function(req) {
          req.url = req.url.replace(/^\/api/, '');
        }
      }
    }
  },
  'resolve': {
    'extensions': ['', '.js', 'css', '.scss', '.html']
  },
  'module': {
    'preLoaders': [{
      'test': /\.js$/,
      'loader': 'eslint-loader',
      'exclude': /node_modules/
    }],

    'loaders': [{
      'test': /\.js$/i,  'loader': 'babel', 'exclude': /node_modules/
    }, {
      'test': /\.scss$/i,
      'loader': ExtractTextPlugin.extract('style', 'css?-url!sass'),
      'include': SOURCE_DIR
    }, {
      'test': /\.(png|woff|woff2|eot|ttf|svg)$/,
      'loader': 'url-loader?limit=100000'
    }]
  },
  'plugins': [
    new ExtractTextPlugin('css/style.css'),
    new CopyWebpackPlugin([{
      'from': ASSETS_DIR
    }, {
      'from': SOURCE_DIR + '/index.html'
    }, {
      'from': MODULES_DIR + '/angular-ui-router/release/' +
          'angular-ui-router.min.js',
      'to': OUTPUT_DIR + '/js/'
    }, {
      'from': MODULES_DIR + '/angular/angular.min.js',
      'to': OUTPUT_DIR + '/js/'
    }, {
      'from': MODULES_DIR + '/angular-cookies/angular-cookies.min.js',
      'to': OUTPUT_DIR + '/js/'
    }, {
      'from': MODULES_DIR + '/bootstrap/dist/css/bootstrap.min.css',
      'to': OUTPUT_DIR + '/css/'
    }, {
      'from': MODULES_DIR + '/bootstrap/dist/js/bootstrap.min.js',
      'to': OUTPUT_DIR + '/js/'
    }, {
      'from': MODULES_DIR + '/es5-shim/es5-shim.min.js',
      'to': OUTPUT_DIR + '/js/'
    }, {
      'from': MODULES_DIR + '/es6-shim/es6-shim.min.js',
      'to': OUTPUT_DIR + '/js/'
    }], {
      'ignore': [],

      // By default, we only copy modified files during
      // a watch or webpack-dev-server build. Setting this
      // to `true` copies all files.
      'copyUnmodified': false
    })
  ]
};
