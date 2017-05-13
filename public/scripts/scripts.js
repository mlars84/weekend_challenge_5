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
    // addFavs(response.data.Search);
  }; //end searchOmdb function

  vm.addFavs = function(movieData) {
    console.log('addFavs button clicked');
    console.log('movieData', movieData);
    vm.favToSend = {
      Title: movieData.data.Title,
      Year: movieData.data.Year,
      Poster: movieData.data.Poster
    };
    console.log(favToSend);

    $http({
      method: 'POST',
      url:'/allMovies',
      data: favToSend
    }).then(function(response){
      console.log(response);
    });
  };
});
