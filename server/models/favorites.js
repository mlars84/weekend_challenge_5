var express = require('express');
var mongoose = require('mongoose');

var favSchema = mongoose.Schema({
  Title: String,
  Year: Number,
  Poster: String
});

var favorites = mongoose.model('favorites', favSchema);

module.exports = {
  favSchema: favSchema,
  favorites: favorites
};
