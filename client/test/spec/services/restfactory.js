'use strict';

describe('Service: RESTfactory', function () {

  // load the service's module
  beforeEach(module('clientAppApp'));

  // instantiate service
  var RESTfactory;
  beforeEach(inject(function (_RESTfactory_) {
    RESTfactory = _RESTfactory_;
  }));

  it('should do something', function () {
    expect(!!RESTfactory).toBe(true);
  });

});
