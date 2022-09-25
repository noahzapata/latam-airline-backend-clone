const {
  createBooking,
  getBooking,
  getBookingById,
  updateBooking,
} = require('./booking.service');

const create = async (req, res) => {
  const bookingData = req.body;

  try {
    const booking = await createBooking(bookingData);
    return res.status(200).json({ message: 'Booking created', data: booking });
  } catch (err) {
    return res
      .status(400)
      .json({ message: 'Booking can not be created', data: err });
  }
};

const list = async (req, res) => {
  try {
    const bookings = await getBooking();
    return res.status(200).json({ message: 'bookings founds', data: bookings });
  } catch (err) {
    return res.status(400).json({ message: 'bookings not found', data: err });
  }
};

const show = async (req, res) => {
  const { bookingId } = req.body;
  try {
    const booking = await getBookingById(bookingId);
    return res.status(200).json({ message: 'booking found', data: booking });
  } catch (err) {
    return res.status(400).json({ message: 'booking not found', data: err });
  }
};

const update = async (req, res) => {
  const { bookingId, data } = req.body;
  try {
    const booking = await updateBooking(bookingId, data);
    return res.status(200).json({ message: 'booking updated', data: booking });
  } catch (err) {
    return res.status(400).json({ message: 'booking not update', data: err });
  }
};

module.exports = { create, list, show, update };
