'use strict';

angular.module('pasibrzuchApp', [
  'pasibrzuchApp.auth',
  'pasibrzuchApp.admin',
  'pasibrzuchApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'angularjs-dropdown-multiselect'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
