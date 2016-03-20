'use strict';

(function() {

  class RecipesService {

    constructor($q, $http) {
      this.$q = $q;
      this.$http = $http;
    }

    getAllRecipes() {
      return this.$http.get('/api/recipes').then(res => { return res.data });
    }

    getCategories() {
      var deferred = this.$q.defer();
      deferred.resolve(
        [
          {id: 'Śniadanie', label: 'Śniadanie'},
          {id: 'Drugie śniadanie', label: 'Drugie śniadanie'},
          {id: 'Obiad', label: 'Obiad'},
          {id: 'Podwieczorek', label: 'Podwieczorek'},
          {id: 'Kolacja', label: 'costam'}
        ]
      );
      return deferred.promise;
    }

    addRecipe(recipe) {
      return this.$http.post('/api/recipes', recipe);
    }
  }

  angular.module('pasibrzuchApp')
    .service('recipesService', RecipesService);

})();
