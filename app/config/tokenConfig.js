var tokens = require('app/config/thirdPartyTokens.json');

// Configure Instagram tokens
var instagramAuthUrl = tokens.instagram.INSTAGRAM_AUTH;
instagramAuthUrl = instagramAuthUrl.replace(/CLIENT_ID/, tokens.instagram.CLIENT_ID);
instagramAuthUrl = instagramAuthUrl.replace(/REDIRECT_URI/, tokens.instagram.REDIRECT_URI);
tokens.instagram.INSTAGRAM_AUTH = instagramAuthUrl;

module.exports = tokens;
