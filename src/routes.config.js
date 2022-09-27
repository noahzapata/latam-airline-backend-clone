const user = require('./api/user/user.route');
const booking = require('./api/booking/booking.route');
const flight = require('./api/flight/flight.route');

function routes(app) {
  app.use('/api/users', user);
  app.use('/api/bookings', booking);
  app.use('/api/flights', flight);
}

module.exports = routes;
