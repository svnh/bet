module.exports = function(app) {
  var port = process.env.PORT || 3000;

  app.listen(port, function(){
    console.log('Server start time: ', new Date());
    console.log('Listening on ', port);
  });
};
