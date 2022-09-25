const user = require('./api/user/user.route');
const booking = require('./api/booking/booking.route');

function routes(app) {
  app.use('/api/users', user);
  app.use('/api/bookings', booking);
}

module.exports = routes;
