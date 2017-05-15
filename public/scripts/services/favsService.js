myApp.service('favsService', ['$http', function($http) {
    var service = this;

    service.favsToDisplay = [];

    console.log('FavoritesController');
    // getFavs function to get favorites from MongoDB
    service.getFavs = function() {
      console.log('get favs button');
      $http({
        method: 'GET',
        url: '/favoriteMovies'
      }).then(function(response) {
        console.log(response.data);
        service.favsToDisplay = response.data;
        console.log(service.favsToDisplay);
      });
    }; //end getFavorites

    // deleteFav function to delete favorite from DOM and MongoDB
    service.deleteFav = function(id) {
      console.log('delete button clicked', id);
      $http({
        method: 'DELETE',
        url: '/favoriteMovies/' + id
      }).then(function(response) {
        console.log(response);
        service.getFavs();
      });
    }; //end deleteFav
}]); //end FavsService service
