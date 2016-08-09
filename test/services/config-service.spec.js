import  { expectInit } from '../helpers';

describe('Service', () => {
  let service, $httpBackend, $rootScope;

  beforeEach(() => {
    angular.mock.module('seed');
  });

  beforeEach(inject($injector => {
    service = $injector.get('configService');
    $httpBackend = $injector.get('$httpBackend');
    $rootScope = $injector.get('$rootScope');
    expectInit($httpBackend);
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('load configuration', (done) => {
    service.promise().then(() => {
      expect(service.get()).to.deep.equal({
        'data': 'value'
      });
      done();
    });

    $httpBackend.flush();
    // setTimeout($rootScope.apply, 10);
  });
});
