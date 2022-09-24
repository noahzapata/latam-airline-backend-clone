const User = require('./user.model');

function createUser(user) {
  return User.create(user);
}

function allUsers() {
  return User.find({});
}

function oneUser(id) {
  return User.findById(id);
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
