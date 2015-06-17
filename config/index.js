module.exports = function(app) {
  require(global.dirname + '/config/start.js')(app);
  require(global.dirname + '/config/routes.js')(app);
  require(global.dirname + '/config/middleware.js')(app);
  require(global.dirname + '/config/cors.js')(app);
};
