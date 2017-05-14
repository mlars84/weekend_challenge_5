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

module.exports = router;
