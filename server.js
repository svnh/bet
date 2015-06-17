var express = require('express');
var app = express();
global.dirname = __dirname;

// Start and configure server
require(global.dirname + '/config/index.js')(app);
