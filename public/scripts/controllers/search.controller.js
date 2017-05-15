myApp.controller('SearchController', ['$searchService', function(searchService) {
var service = this;

service.searchOmdb = searchService.searchOmdb;

}]); //end search controller
