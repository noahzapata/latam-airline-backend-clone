const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {
  updatePhotoUser,
  createUser,
  allUsers,
  oneUser,
  findFlights,
  deleteUser,
  signIn,
  signUp,
} = require('./user.service');
const User = require('./user.model');
const Booking = require('../booking/booking.model');
const { transporter, welcome } = require('../../utils/mailer');

const signUpHandle = async (req, res) => {
  const userData = req.body;
  try {
    const encPassword = await bcrypt.hash(userData.password, 8);
    const user = await signUp(userData, encPassword);
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: 60 * 60 * 24,
    });
    await transporter.sendMail(welcome(user));
    return res
      .status(201)
      .json({ message: 'User created successfully', data: { user, token } });
  } catch (err) {
    return res
      .status(400)
      .json({ message: 'User could not be created', error: err });
  }
};

const signInHandle = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await signIn(email);
    if (!user) {
      throw new Error('Some of your credentials are invalid');
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new Error('Some of your credentials are invalid');
    }
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: 60 * 60 * 24,
    });
    return res
      .status(201)
      .json({ message: 'Login successfully', data: { email, token } });
  } catch (err) {
    return res
      .status(400)
      .json({ message: 'User could not login', error: err.message });
  }
};
const findUserflights = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await findFlights(email);
    return res.status(200).json({ message: 'User flights found', data: user });
  } catch (err) {
    return res.status(400).json({ message: 'User not found', data: err });
  }
};

async function create(req, res) {
  const { bookingId } = req.params;
  const passengerRelated = req.body;
  try {
    const userSaved = [];
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      throw new Error('The booking does not exist');
    }

    for (let i = 0; i < passengerRelated.length; i++) {
      const existingUser = await User.findOne({
        email: passengerRelated[i].email,
      });
      if (!existingUser) {
        const user = await createUser(passengerRelated[i]);
        user.bookings.push(booking._id);
        await user.save({ validateBeforeSave: false });
        userSaved.push(user);
        booking.users.push(user);
        await booking.save({ validateBeforeSave: false });
        await transporter.sendMail(welcome(user));
      } else {
        existingUser.bookings.push(booking._id);
        await existingUser.save({ validateBeforeSave: false });
        userSaved.push(existingUser);
        booking.users.push(existingUser);

        await booking.save({ validateBeforeSave: false });
      }
    }
    return res.status(201).json({ message: 'User created', data: userSaved });
  } catch (err) {
    return res
      .status(400)
      .json({ messaje: 'User could not be created', data: err.message });
  }
}

async function list(req, res) {
  try {
    const users = await allUsers();
    return res.status(200).json({ message: 'Users found', data: users });
  } catch (err) {
    return res.status(400).json({ message: 'Users not found', data: err });
  }
}

async function show(req, res) {
  const userId = req.user;
  try {
    const user = await oneUser(userId);
    return res.status(200).json({ message: 'User found', data: user });
  } catch (err) {
    return res.status(400).json({ message: 'User not found', data: err });
  }
}

async function update(req, res) {
  const userData = req.body;
  try {
    const userUdated = await updatePhotoUser(userData);
    return res.status(200).json({ message: 'User updated', data: userUdated });
  } catch (err) {
    return res
      .status(400)
      .json({ message: 'User could not been update', data: err });
  }
}

async function destroy(req, res) {
  const { userId } = req.params;
  try {
    const userDeleted = await deleteUser(userId);
    return res.status(200).json({ message: 'User deleted', data: userDeleted });
  } catch (err) {
    return res
      .status(400)
      .json({ message: 'User could no be deleted', data: err });
  }
}

module.exports = {
  create,
  list,
  show,
  update,
  findUserflights,
  destroy,
  signUpHandle,
  signInHandle,
};
