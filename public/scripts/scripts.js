var myApp = angular.module('myApp', []);

myApp.controller('MovieController', function($http) {
  console.log('NG');

  var vm = this;

  vm.getFilms = function() {
    console.log('in getFilms');
  };

  vm.searchOmdb = function() {
    console.log('button clicked');
  };
});
