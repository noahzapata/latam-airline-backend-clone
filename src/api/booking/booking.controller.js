const User = require('../user/user.model');
const jwt = require('jsonwebtoken');
const {
  createBooking,
  deleteBooking,
  createBookingTest,
  getBooking,
  getBookingById,
  updateBooking,
} = require('./booking.service');
const Flight = require('../flight/flight.model');
const { transporter, welcome, checkout } = require('../../utils/mailer');

const create = async (req, res) => {
  try {
    const { bookingData, token } = req.body;
    const { id } = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(id);
    if (!user) {
      throw new Error('The user does not exist');
    }
    const booking = await createBooking(bookingData, id);
    user.bookings.push(booking);
    await user.save({ validateBeforeSave: false });
    return res.status(201).json({ message: 'Booking created', data: booking });
  } catch (err) {
    return res
      .status(400)
      .json({ message: 'Booking can not be created', data: err });
  }
};

const destroy = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const booking = await deleteBooking(bookingId);
    return res.status(200).json({ message: 'Booking deleted', data: booking });
  } catch (err) {
    return res
      .status(400)
      .json({ message: 'Booking can not be created', data: err });
  }
};

const createTest = async (req, res) => {
  try {
    const bookingData = req.body;
    const booking = await createBookingTest(bookingData);
    return res.status(201).json({ message: 'Booking created', data: booking });
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
  const {
    bookingId,
    tripGoFlight,
    tripGoBackFlight,
    users,
    reservedSeats,
    luggage,
    isPaid,
  } = req.body;

  const newBooking = {
    isPaid,
    reservedSeats,
    luggage,
  };
  const tripGoSeats = reservedSeats.tripGoSeats;
  const tripReturnSeats = reservedSeats.tripReturnSeats;

  try {
    const booking = await updateBooking(bookingId, newBooking);

    const goFlight = await Flight.findById(tripGoFlight);
    const newFlightAndSeats = {
      ...goFlight,
      seats: {
        ...goFlight.seats,
        firstDiv: goFlight.seats.firstDiv,
        secondDiv: goFlight.seats.secondDiv,
        thirthDiv: goFlight.seats.thirthDiv,
      },
    };
    for (let i = 0; i < tripGoSeats.length; i++) {
      newFlightAndSeats.seats.firstDiv = goFlight.seats.firstDiv.map(
        (rowSeats) => {
          rowSeats.forEach((seat) => {
            if (
              seat.column === tripGoSeats[i].column &&
              seat.row === tripGoSeats[i].row
            ) {
              seat.avaliable = false;
            }
          });
        }
      );
    }
    for (let i = 0; i < tripGoSeats.length; i++) {
      newFlightAndSeats.seats.secondDiv = goFlight.seats.secondDiv.map(
        (rowSeats) => {
          rowSeats.forEach((seat) => {
            if (
              seat.column === tripGoSeats[i].column &&
              seat.row === tripGoSeats[i].row
            ) {
              seat.avaliable = false;
            }
          });
        }
      );
    }
    for (let i = 0; i < tripGoSeats.length; i++) {
      newFlightAndSeats.seats.thirthDiv = goFlight.seats.thirthDiv.map(
        (rowSeats) => {
          rowSeats.forEach((seat) => {
            if (
              seat.column === tripGoSeats[i].column &&
              seat.row === tripGoSeats[i].row
            ) {
              seat.avaliable = false;
            }
          });
        }
      );
    }
    const goFlightUpdated = await Flight.findByIdAndUpdate(
      goFlight._id,
      newFlightAndSeats,
      { new: true }
    );
    booking.tripGoFlight = goFlightUpdated;
    await booking.save({ validateBeforeSave: false });

    const GoBackFlight = await Flight.findById(tripGoBackFlight);
    const newFlightAndSeatsToReturn = {
      ...GoBackFlight,
      seats: {
        ...GoBackFlight.seats,
        firstDiv: GoBackFlight.seats.firstDiv,
        secondDiv: GoBackFlight.seats.secondDiv,
        thirthDiv: GoBackFlight.seats.thirthDiv,
      },
    };
    for (let i = 0; i < tripReturnSeats.length; i++) {
      newFlightAndSeatsToReturn.seats.firstDiv =
        GoBackFlight.seats.firstDiv.map((rowSeats) => {
          rowSeats.forEach((seat) => {
            if (
              seat.column === tripReturnSeats[i].column &&
              seat.row === tripReturnSeats[i].row
            ) {
              seat.avaliable = false;
            }
          });
        });
    }
    for (let i = 0; i < tripReturnSeats.length; i++) {
      newFlightAndSeatsToReturn.seats.secondDiv =
        GoBackFlight.seats.secondDiv.map((rowSeats) => {
          rowSeats.forEach((seat) => {
            if (
              seat.column === tripReturnSeats[i].column &&
              seat.row === tripReturnSeats[i].row
            ) {
              seat.avaliable = false;
            }
          });
        });
    }
    for (let i = 0; i < tripReturnSeats.length; i++) {
      newFlightAndSeatsToReturn.seats.thirthDiv =
        GoBackFlight.seats.thirthDiv.map((rowSeats) => {
          rowSeats.forEach((seat) => {
            if (
              seat.column === tripGoSeats[i].column &&
              seat.row === tripGoSeats[i].row
            ) {
              seat.avaliable = false;
            }
          });
        });
    }
    const returnFlightUpdated = await Flight.findByIdAndUpdate(
      GoBackFlight._id,
      newFlightAndSeatsToReturn,
      { new: true }
    );

    booking.tripGoBackFlight = returnFlightUpdated;
    await booking.save({ validateBeforeSave: false });

    for (let i = 0; i < users.length; i++) {
      const existingUser = await User.findOne({
        email: users[i].email,
      });
      if (!existingUser) {
        const user = await User.create(users[i]);
        booking.users.push(user);
        await booking.save({ validateBeforeSave: false });
        await transporter.sendMail(welcome(user));
        await transporter.sendMail(checkout(user, booking));

        user.bookings.push(booking);
        await user.save({ validateBeforeSave: false });
      } else {
        booking.users.push(existingUser);
        await booking.save({ validateBeforeSave: false });

        existingUser.bookings.push(booking);
        await existingUser.save({ validateBeforeSave: false });
        await transporter.sendMail(checkout(existingUser, booking));
      }
    }

    return res.status(200).json({ message: 'booking updated', data: booking });
  } catch (err) {
    return res.status(400).json({ message: 'booking not update', data: err });
  }
};

module.exports = { create, list, show, update, createTest, destroy };
