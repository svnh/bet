module.exports = function(app, express) {
  require('app/config/middleware.js')(app, express);
  require('app/config/cors.js')(app);
  require('app/config/routes.js')(app);
};
