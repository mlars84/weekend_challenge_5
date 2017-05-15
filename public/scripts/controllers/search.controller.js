myApp.controller('SearchController', ['searchService', function(searchService) {
var service = this;

service.searchOmdb = searchService.searchOmdb;

service.addFavs = searchService.addFavs;

}]); //end search controller
