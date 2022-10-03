const User = require('./user.model');

const createUser = async (user) => {
  return await User.create(user);
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

const updateUser = (id, user) => {
  return User.findByIdAndUpdate(id, user, { new: true });
};

const deleteUser = (id) => {
  return User.findByIdAndRemove(id);
};

const signUp = async (email, encPassword) => {
  return User.create({ email, password: encPassword });
};

const signIn = (email) => {
  return User.findOne({ email });
};

module.exports = {
  createUser,
  allUsers,
  oneUser,
  updateUser,
  deleteUser,
  signIn,
  signUp,
};
