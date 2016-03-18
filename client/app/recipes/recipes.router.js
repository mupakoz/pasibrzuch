'use strict';

angular.module('pasibrzuchApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('recipes', {
        url: '/recipes',
        templateUrl: 'app/recipes/recipes.html',
        controller: 'RecipesController',
        controllerAs: 'recipes',
        authenticate: 'user'
      });
  });
