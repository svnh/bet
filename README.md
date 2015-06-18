## Bet
> Well right now this is just some [Instagram] auth

#### ToC
1. [Config]
1. [Development]
  1. [Resources]
  1. [Scripts]
  1. [Routes]

#### Config
1. Copy config file `cp config/thirdPartyTokens.example.json config/thirdPartyTokens.json`
1. Fill out `config/thirdPartyTokens.json`
  1. Register your application with Instagram to get tokens via the [Manage Clients] panel

#### Development
1. [app-module-path] is used for application modules. It is installed in `server.js` so all
local `require` will have the root of this directory automagically pre-pended. Decision to
use this module based off of [this discussion].

##### Resources
1. [Instagram dev docs]
1. [instagram-node]

##### Scripts
Command | Description
--- | ---
`npm start` | Configure and start the server.

##### Routes
Route | Description
--- | ---
`GET /instagram` | View home page or redirect to authentication if not authenticated
`GET /instagram/followers` | Retrieve all follwers for a user
`GET /instagram/auth/callback` | Set cookie and redirect to home page

<!-- Links -->
[Instagram]: https://instagram.com/
[Config]: #config
[Development]: #development
[Resources]: #resources
[Instagram dev docs]: https://instagram.com/developer
[instagram-node]: https://github.com/totemstech/instagram-node
[Scripts]: #scripts
[Routes]: #routes
[Manage Clients]: https://instagram.com/developer/clients/manage/
[app-module-path]: https://github.com/patrick-steele-idem/app-module-path-node
[this discussion]: https://gist.github.com/branneman/8048520
