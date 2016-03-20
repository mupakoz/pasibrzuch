'use strict';

angular.module('pasibrzuchApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('recipes', {
        url: '/recipes',
        templateUrl: 'app/recipes/recipes.html',
        controller: 'RecipesController',
        controllerAs: 'recipesVm',
        authenticate: 'user'
      })
      .state('recipesAdd', {
        url: '/recipes/add',
        templateUrl: 'app/recipes/add/recipesAdd.html',
        controller: 'RecipesAddController',
        controllerAs: 'recipesAddVm',
        authenticate: 'user'
      });
  });
