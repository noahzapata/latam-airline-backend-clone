const Booking = require('./booking.model');

const createBooking = async (data, userId) => {
  return await Booking.create({ ...data, user: userId });
};
const createBookingTest = async (data) => {
  return await Booking.create(data);
};
const getBooking = () => {
  return Booking.find({}).populate({
    path: 'user',
    select: 'firstname lastname -_id',
  });
};

const getBookingById = (id) => {
  return Booking.findById(id);
};

const updateBooking = (id, data) => {
  return Booking.findByIdAndUpdate(id, data, { new: true });
};

const deleteBooking = (id) => {
  return Booking.findByIdAndDelete(id);
};

module.exports = {
  createBooking,
  getBooking,
  getBookingById,
  updateBooking,
  createBookingTest,
  deleteBooking,
};
