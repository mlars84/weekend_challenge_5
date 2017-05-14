var myApp = angular.module('myApp', []);

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

  vm.addFavs = function(title, year, poster, id) {
    console.log('addFavs button clicked');
    console.log(title, year, poster, id);
    vm.favToSend = {
      title: title,
      year: year,
      poster: poster,
      id: id
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
});
