module.exports = function(app, express) {
  var cookieParser = require('cookie-parser');

  app.use(cookieParser());

  app.use(function(err, req, res, next){
    if(!err) return next();

    console.error('Error: ', err.stack);
    res.status(500).send(err);
  });
};
