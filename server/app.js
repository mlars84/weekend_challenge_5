//requirements
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var db = require('./modules/db');
var favMoviesRoutes = require('./routes/allMovies');

//globals
var port = process.env.PORT || 8080;

//uses
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));
//use for favMoviesRoutes in routes/allMovies
app.use('/favoriteMovies', favMoviesRoutes);

//base url hit
app.get('/*', function(req, res) {
  res.sendFile(path.resolve('public/views/index.html'));
});

//listening
app.listen(port, function(req, res) {
  console.log('listening on:', port);
});
