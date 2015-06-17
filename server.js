var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
// See note in README.md for explanation
require('app-module-path').addPath(__dirname + '/');
// Global root variable for filepaths inside of app, to avoid ../../../../ madness
global.__root = __dirname;

// Configure and start application
require('app/config/index.js')(app, express);
app.listen(port, function(){
  console.log('Server start time: ', new Date());
  console.log('Listening on ', port);
});
