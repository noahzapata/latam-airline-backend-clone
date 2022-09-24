const user = require('./routes/user.route');

function routes(app) {
  app.use('/api/users', user);
}

module.exports = routes;
