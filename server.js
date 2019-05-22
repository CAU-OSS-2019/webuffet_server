var express    = require('express');
var app        = express();
var path       = require('path');
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');
var db_url = 'mongodb://localhost:27017/local';

// Database
mongoose.Promise = global.Promise;
mongoose.connect(db_url);

var db = mongoose.connection;

db.once('open', function () {
   console.log('DB connected!');
});
db.on('error', function (err) {
  console.log('DB ERROR:', err);
});

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'content-type');
  next();
});

// API
app.use('/api/WBF', require('./api/WBF_DB'));

// Server
var port = 3000;
app.listen(port, function(){
  console.log('listening on port:' + port);
});
