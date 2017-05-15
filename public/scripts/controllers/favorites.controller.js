//controller that connects to favorites.services and favorites.html
myApp.controller('FavoritesController', ['favsService', function(favsService) {
  console.log('Made it to FavoritesController');

  var service = this;

  service.getFavs = favsService.getFavs;

  service.deleteFav = favsService.deleteFav;

}]); //end FavoritesController
