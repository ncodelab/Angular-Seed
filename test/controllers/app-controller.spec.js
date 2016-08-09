import  { expectInit } from '../helpers';

describe('App Controller', () => {
  let $controller, $rootScope, $httpBackend;

  beforeEach(() => {
    angular.mock.module('seed');
  });

  beforeEach(inject($injector => {
    $controller = $injector.get('$controller');
    $rootScope = $injector.get('$rootScope');
    $httpBackend = $injector.get('$httpBackend');
    expectInit($httpBackend);
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('Scope', () => {
    let $scope, appController;

    beforeEach(() => {
      $scope = $rootScope.$new();
      appController = $controller('app.Controller', {
        '$scope': $scope
      });

      $httpBackend.flush();
    });

    it('hello angular seed', () => {
      expect($scope.message).to.equal('Hello Angular Seed');
    });
  });
});
