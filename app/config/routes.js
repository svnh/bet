module.exports = function(app) {
  var appController = require('app/controllers/appController.js');

  app.get('/instagram/auth/callback', appController.authCallback);
  app.get('/instagram/followers', appController.isAuthenticated, appController.followers);
  app.get('/instagram/', appController.isAuthenticated, appController.home);
};
