const user = require('./api/user/user.route');

function routes(app) {
  app.use('/api/users', user);
}

module.exports = routes;
