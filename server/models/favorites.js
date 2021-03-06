var express = require('express');
var mongoose = require('mongoose');
//var Schema = mongoose.Schema;

var favSchema = mongoose.Schema({
  title: String,
  year: Number,
  poster: String
});

var favorites = mongoose.model('favorites', favSchema);

module.exports = {
  favSchema: favSchema,
  favorites: favorites
};
