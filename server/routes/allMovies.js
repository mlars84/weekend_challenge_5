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

module.exports = router;
