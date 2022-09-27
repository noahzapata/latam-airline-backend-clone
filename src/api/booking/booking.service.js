const Booking = require('./booking.model');

const createBooking = (data, userId) => {
  return Booking.create({ ...data, user: userId }).populate('user');
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
