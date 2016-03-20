'use strict';

(function() {

  class RecipesService {

    constructor($q) {
      this.$q = $q;
    }

    getAllRecipes() {
      var deferred = this.$q.defer();
      deferred.resolve(
        [
          {
            name: 'Kanapki z orzeźwiającym serkiem i orzechami',
            categories: ['Śniadanie']
          },
          {
            name: 'Kasza jaglana ze szparagami, suszonymi pomidorami i fetą',
            categories: ['Obiad']
          },
          {
            name: 'Koktajl truskawkowy',
            categories: ['Podwieczorek']
          }
        ]
      );
      return deferred.promise;
    }

    getCategories() {
      var deferred = this.$q.defer();
      deferred.resolve(
        [
          {id: 'Śniadanie', label: 'Śniadanie'},
          {id: 'Drugie śniadanie', label: 'Drugie śniadanie'},
          {id: 'Obiad', label: 'Obiad'},
          {id: 'Podwieczorek', label: 'Podwieczorek'},
          {id: 'Kolacja', label: 'Kolacja'}
        ]
      );
      return deferred.promise;
    }
  }

  angular.module('pasibrzuchApp')
    .service('recipesService', RecipesService);

})();
