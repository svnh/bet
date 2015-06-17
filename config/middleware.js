module.exports = function(app) {
  app.use(function(err, req, res, next){
    if(!err) return next();

    console.error('Error: ', err.stack);
    res.status(500).send(err);
  });
};
