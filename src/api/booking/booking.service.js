const Booking = require('./booking.model');

const createBooking = (booking) => {
  return Booking.create(booking);
};
const getBooking = () => {
  return Booking.find({});
};

const getBookingById = (id) => {
  return Booking.findById(id);
};

const updateBooking = (id, data) => {
  return Booking.findByIdAndUpdate(id, data, { new: true });
};

module.exports = { createBooking, getBooking, getBookingById, updateBooking };
