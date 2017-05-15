//creating the angular module that will act as our entire application
var myApp = angular.module('myApp', ['ngRoute']);

//ng function to provide routes and estabish controllers
myApp.config(function($routeProvider, $locationProvider) {
  //bring in $routeProvider (just a small part of ngRoute)
  //allows us to do client side navigation
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
  //location provider method for html5
  $locationProvider.html5Mode(true);
}); //end config

//default controller for home page
myApp.controller('DefaultController', function() {
  console.log('DefaultController');
}); //end DefaultController
