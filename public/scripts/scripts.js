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
      vm.movieToDisplay = response.data.Search;
    });
  };
});
