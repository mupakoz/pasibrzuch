'use strict';

describe('Controller: RecipesController', function () {

  // load the controller's module
  beforeEach(module('pasibrzuchApp'));

  var RecipesController, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecipesController = $controller('RecipesController', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
