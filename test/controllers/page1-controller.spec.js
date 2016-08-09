import  { expectInit } from '../helpers';

describe('Page1 Controller', () => {
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
    let $scope, pageController;

    beforeEach(() => {
      $scope = $rootScope.$new();
      pageController = $controller('app.Page1Controller', {
        '$scope': $scope
      });

      $httpBackend.flush();
    });

    it('message', () => {
      expect($scope.page.message()).to.equal('Page 1');
    });
  });
});
