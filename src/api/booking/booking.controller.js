const { createBooking } = require('./booking.service');

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

module.exports = { create };
