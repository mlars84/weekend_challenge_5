myApp.service('searchService', ['$http', function($http) {

    var service = this; //refers to main service function

    service.movieToDisplay = [];

    //function to get films from OMDB based on user search
    service.searchOmdb = function(searchIn) {
      console.log('in searchOmdb');
      $http({
        method: 'GET',
        url: 'http://www.omdbapi.com/?s=' + service.searchIn
      }).then(function(response) {
        console.log(response);
        service.movieToDisplay = response.data.Search;
      });
    }; //end searchOmdb function

    service.addFavs = function(title, year, poster) {
      console.log('addFavs button clicked');
      console.log(title, year, poster);
      service.favToSend = {
        title: title,
        year: year,
        poster: poster
      };
      console.log(service.favToSend);
      $http({
        method: 'POST',
        url:'/favoriteMovies',
        data: service.favToSend
      }).then(function(response){
        console.log(response);
      });
    }; //end addFavs function
}]); //end searchService
