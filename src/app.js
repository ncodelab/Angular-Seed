require('./style/app.scss');
require('./controllers/controllers');
require('./services/services');

const app = angular.module('seed', [
  'ui.router',
  'seed.controllers',
  'seed.services'
]);

app.config(['$stateProvider', '$urlRouterProvider',
  ($stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise('/page1');
    const configResolve = {
      'ConfigServiceInit': (configService) => configService.promise()
    };

    $stateProvider
        .state('app', {
          'abstract': true,
          'templateUrl': 'templates/navigation.html',
          'controller': 'app.Controller',
          'resolve': configResolve
        })
        .state('app.page1', {
          'url': '/page1',
          'templateUrl': 'templates/page.html',
          'controller': 'app.Page1Controller'
        })
        .state('app.page2', {
          'url': '/page2/:id',
          'templateUrl': 'templates/page.html',
          'controller': 'app.Page2Controller'
        })
  }
]);
