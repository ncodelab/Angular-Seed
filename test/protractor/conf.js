exports.config = {
  'baseUrl': 'http://localhost:8080',

  'specs': ['../../test/**/*.e2e.js'],
  'exclude': [],

  'framework': 'mocha',
  'seleniumAddress': 'http://localhost:4444/wd/hub',

  'multiCapabilities': [{
    'browserName': 'firefox'
  }, {
    'browserName': 'chrome'
  }]
};
