const user = require('./api/user/user.route');
const booking = require('./api/booking/booking.route');
const flight = require('./api/flight/flight.route');
const airplane = require('./api/airplane/airplane.route');
const airport = require('./api/airport/airport.route');

function routes(app) {
  app.use('/api/users', user);
  app.use('/api/auth/local', user);
  app.use('/api/bookings', booking);
  app.use('/api/flights', flight);
  app.use('/api/airplanes', airplane);
  app.use('/api/airports', airport);
}

module.exports = routes;
