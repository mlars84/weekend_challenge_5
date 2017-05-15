var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    template: '<h1>Click on search to search for your favorite films!</h1>',
    controller: 'DefaultController as dc'
  }).when('/search', {
    templateUrl: '/views/pages/search.html',
    controller: 'MovieController as mc'
  }).when('/favorites', {
    templateUrl: '/views/pages/favorites.html',
    controller: 'FavoritesController as fc'
  }).otherwise('/');

  $locationProvider.html5Mode(true);
}); //end config

myApp.controller('MovieController', function($http) {
  console.log('NG');

  var vm = this;

  vm.movieToDisplay = [];

  //function to get films from OMDB based on user search
  vm.searchOmdb = function() {
    console.log('in searchOmdb');
    $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?s=' + vm.searchIn
    }).then(function(response) {
      console.log(response);
      vm.movieToDisplay = response.data.Search;
    });
  }; //end searchOmdb function

  vm.addFavs = function(title, year, poster) {
    console.log('addFavs button clicked');
    console.log(title, year, poster);
    vm.favToSend = {
      title: title,
      year: year,
      poster: poster
    };
    console.log(vm.favToSend);
    $http({
      method: 'POST',
      url:'/favoriteMovies',
      data: vm.favToSend
    }).then(function(response){
      console.log(response);
    });
  }; //end addFavs function
}); //end MovieController


myApp.controller('FavoritesController', function($http) {
  var vm = this;

  vm.favsToDisplay = [];

  console.log('FavoritesController');
  vm.getFavs = function() {
    console.log('get favs button');
    $http({
      method: 'GET',
      url: '/favoriteMovies'
    }).then(function(response) {
      console.log(response.data);
      vm.favsToDisplay = response.data;
      console.log(vm.favsToDisplay);
    });
  }; //end getFavorites

  vm.deleteFav = function(id) {
    console.log('delete button clicked', id);
    $http({
      method: 'DELETE',
      url: '/favoriteMovies/' + id
    }).then(function(response) {
      console.log(response);
      vm.getFavs();
    });
  }; //end deleteFav
}); //end FavoritesController

myApp.controller('DefaultController', function() {
  console.log('DefaultController');
}); //end DefaultController
