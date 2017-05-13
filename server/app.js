//requirements
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var db = require('./modules/db');

//globals
var port = process.env.PORT || 2333;

//uses
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));

//base url hit
app.get('/', function(req, res) {
  res.sendFile(path.resolve('public/views/index.html'));
});

//listening
app.listen(port, function(req, res) {
  console.log('listening on:', port);
});
