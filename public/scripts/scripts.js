var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    template: '<h1>Click on search to search for your favorite films!</h1>',
    controller: 'DefaultController as dc'
  }).when('/search', {
    templateUrl: '/views/pages/search.html',
    controller: 'SearchController as sc'
  }).when('/favorites', {
    templateUrl: '/views/pages/favorites.html',
    controller: 'FavoritesController as fc'
  }).otherwise('/');

  $locationProvider.html5Mode(true);
}); //end config


myApp.controller('DefaultController', function() {
  console.log('DefaultController');
}); //end DefaultController
