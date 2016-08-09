// Karma configuration
// Generated on Fri May 13 2016 09:32:45 GMT+0300 (MSK)

module.exports = function(config) {
  const webpackConf = require('../../webpack.config.js');
  webpackConf.entry = {};

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    'basePath': '../..',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    'frameworks': ['mocha', 'chai'],

    // list of files / patterns to load in the browser
    'files': [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/angular-ui-router/release/angular-ui-router.min.js',
      'node_modules/angular-cookies/angular-cookies.js',
      'src/app.js',
      'test/**/*.spec.js'
    ],

    // list of files to exclude
    'exclude': [
      'test/karma/*.js'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors:
    //   https://npmjs.org/browse/keyword/karma-preprocessor
    'preprocessors': {
      'src/app.js': ['webpack'],
      'test/**/*.js': ['webpack']
    },

    'webpack': webpackConf,

    'webpackMiddleware': {
      // webpack-dev-middleware configuration
      // i. e.
      'noInfo': true
    },

    'babelPreprocessor': {
      'options': {
        'sourceMap': 'inline'
      },
      'filename': function(file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      'sourceFileName': function(file) {
        return file.originalPath;
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    'reporters': ['spec'],

    // web server port
    'port': 9876,

    // enable / disable colors in the output (reporters and logs)
    'colors': true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR ||
    // config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    'logLevel': config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any
    // file changes
    'autoWatch': true,
    'autoWatchBatchDelay': 300,

    // start these browsers
    // available browser launchers:
    //   https://npmjs.org/browse/keyword/karma-launcher
    'browsers': ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    'singleRun': false,

    // Concurrency level
    // how many browser should be started simultaneous
    'concurrency': Infinity
  })
};
