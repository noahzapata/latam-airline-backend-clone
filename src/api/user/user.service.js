const User = require('./user.model');

const createUser = (user) => {
  return User.create(user);
};

const allUsers = () => {
  return User.find({}).populate({
    path: 'bookings',
    select: 'origin destination luggage -_id adults kids babies',
  });
};

const oneUser = (id) => {
  return User.findById(id).populate({
    path: 'bookings',
    select: 'origin destination luggage passengers',
  });
};
const findFlights = (email) => {
  return User.findOne({ email }).populate({
    path: 'bookings',
    populate: [
      {
        path: 'tripGoFlight',
        model: 'Flight',
        populate: [
          { path: 'departureAirport', model: 'Airport' },
          { path: 'departureArrival', model: 'Airport' },
        ],
      },
      {
        path: 'tripGoBackFlight',
        model: 'Flight',
        populate: [
          { path: 'departureAirport', model: 'Airport' },
          { path: 'departureArrival', model: 'Airport' },
        ],
      },
    ],
  });
};

const updatePhotoUser = async (data) => {
  const { email, profilePhoto } = data;
  const user = await User.findOne({ email });
  return await User.findByIdAndUpdate(
    user.id,
    { profilePhoto: profilePhoto },
    { new: true }
  );
};

const deleteUser = (id) => {
  return User.findByIdAndRemove(id);
};

const signUp = async (user, encPassword) => {
  return User.create({ ...user, password: encPassword });
};

const signIn = (email) => {
  return User.findOne({ email });
};

module.exports = {
  createUser,
  allUsers,
  oneUser,
  findFlights,
  updatePhotoUser,
  deleteUser,
  signIn,
  signUp,
};
