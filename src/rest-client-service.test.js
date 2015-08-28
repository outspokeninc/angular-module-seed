/*
    Testing the rest client service.

    This test uses an arsenal of different testing tools:
    * angular-mocks is used to instantiate the entire seed-module. Note the syntax is "angular.mock.module" rather
      than just "module."  This is because browserify's use of the global module trumps angular-mock's window.module.
    * chai-as-promised enables nice promise syntax with the eventually
    * sinon let's us attach spies and stubs. Using sinon-chai to give nicer syntax

 */

describe('rest client service', function() {

  var restClient, http, httpBackend;

  beforeEach(angular.mock.module('seed-module'));

  beforeEach(inject(function(_restClient_, $http, $httpBackend) {
    restClient = _restClient_;
    http = $http;
    httpBackend = $httpBackend;
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });



  it('exists', function() {
    restClient.should.exist;
    restClient.should.have.property('getData').and.be.a('function');
  });


  it('gets data', function(done) {
    httpBackend.when('GET', '/dist/rest-client-data.json').respond({ foo: 'mock foo result'});
    restClient.getData().should.eventually.eql({ foo: 'mock foo result'}).and.notify(done);
    httpBackend.flush();
  });

});