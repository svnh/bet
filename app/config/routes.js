module.exports = function(app) {
  var appController = require('app/controllers/appController.js');

  app.get('/auth/callback', appController.authCallback);
  app.get('/', appController.isAuthenticated, appController.home);
};
