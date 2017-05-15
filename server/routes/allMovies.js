//requires
var express = require('express');
var router = express.Router();
//another option to make router...
//var router = require('express').Router();
var mongoose = require('mongoose');
var favoritesModel = require('../models/favorites');

// POST to add favorite to DB
router.post('/', function(req, res) {
  console.log('POST router', req.body);
  var newFavorites = favoritesModel.favorites(req.body);
  newFavorites.save().then(function(){
    res.sendStatus(200);
  });
});

router.get('/', function(req, res) {
  console.log('GET Router for fav movies');
  favoritesModel.favorites.find().then(function(data){
    console.log('data', data);
    res.send(data);
  });
});

//delete is coming from deleteFav in favsService and is getting id from object
//and passing it through using params: {id:id}
router.delete('/', function(req, res) {
  console.log('DELETE from favs router');
  var idToDelete = req.query.id;
  favoritesModel.favorites.remove({_id: idToDelete}).then(function(){
    console.log('delete by id', idToDelete);
    res.sendStatus(200);
  });
});

module.exports = router;
