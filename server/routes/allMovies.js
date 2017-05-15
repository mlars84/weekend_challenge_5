//requires
var express = require('express');
var router = express.Router();
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

router.delete('/:id', function(req, res) {
  console.log('DELETE from favs router');
  favoritesModel.favorites.remove({_id: req.params.id}).then(function(){
    console.log('delete by id', req.params.id);
    res.sendStatus(200);
  });
});

module.exports = router;
