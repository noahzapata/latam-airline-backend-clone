const Booking = require('./booking.model');

const createBooking = (booking) => {
  return Booking.create(booking);
};

module.exports = { createBooking };
