const User = require('./user.model');

function createUser(user) {
  return User.create(user);
}

function allUsers() {
  return User.find({}).populate({
    path: 'bookings',
    select: 'origin destination luggage -_id adults kids babies',
  });
}

function oneUser(id) {
  return User.findById(id).populate({
    path: 'bookings',
    select: 'origin destination luggage passengers',
  });
}

function updateUser(id, user) {
  return User.findByIdAndUpdate(id, user, { new: true });
}

function deleteUser(id) {
  return User.findByIdAndRemove(id);
}

module.exports = {
  createUser,
  allUsers,
  oneUser,
  updateUser,
  deleteUser,
};
