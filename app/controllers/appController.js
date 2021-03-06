var instagramTokens = require('app/config/tokenConfig.js').instagram;
var redirect_uri = instagramTokens.REDIRECT_URI;

var instagram = require('instagram-node').instagram();
instagram.use({
  client_id: instagramTokens.CLIENT_ID,
  client_secret: instagramTokens.CLIENT_SECRET
});

module.exports = {
  authCallback: function(req, res) {
    instagram.authorize_user(req.query.code, redirect_uri, function(err, result) {
      if(err) return res.send('Authentication failed with', err);

      res.cookie('instagram', result, { maxAge: 60 * 60 * 1000 }); // maxAge 1 hour
      res.redirect('/instagram');
    });
  },

  followers: function(req, res) {
    var followers = [];

    var addFollowers = function(err, users, pagination, remaining, limit) {
      if(err) return res.status(500).end('Error finding followers', err);

      followers = followers.concat(users);
      if(pagination.next) return pagination.next(addFollowers);

      res.send(followers);
    };

    instagram.user_followers(req.cookies.instagram.user.id, addFollowers);
  },

  home: function(req, res, next) {
    var fileName = global.__root + '/public';

    res.sendFile('index.html', { root: fileName });
  },

  isAuthenticated: function(req, res, next) {
    if(req.cookies.instagram && req.cookies.instagram) return next();

    res.redirect(instagram.get_authorization_url(redirect_uri, { scope: ['basic'] }));
  }
};
