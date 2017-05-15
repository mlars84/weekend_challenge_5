myApp.controller('SearchController', ['searchService', function(searchService) {
console.log('Made it to SearchController');
var service = this; //setting service so that 'this' never refers to the wrong thing

//this connects the view and controller to service
service.searchOmdb = searchService.searchOmdb;

service.movieToDisplay = searchService.movieToDisplay;

//this connects the view and controller to the service
service.addFavs = searchService.addFavs;

}]); //end search controller
