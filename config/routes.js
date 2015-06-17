var appController = require(global.dirname + '/app/controllers/appController.js');

module.exports = function(app) {
  app.get('/', appController.sendOk);
};
