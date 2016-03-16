'use strict';

angular.module('pasibrzuchApp.auth', [
  'pasibrzuchApp.constants',
  'pasibrzuchApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
