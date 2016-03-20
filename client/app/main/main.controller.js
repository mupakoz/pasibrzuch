'use strict';

(function() {

class MainController {

  constructor($http) {
    this.$http = $http;
    this.awesomeThings = [];
  }

    $onInit() {
    this.$http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
    });
    this.$http.get('/api/recipes/categories').then(response => {
      console.log(reponse.data);
    })
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('pasibrzuchApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
