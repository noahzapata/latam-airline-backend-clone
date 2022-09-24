const {
  updateUser,
  createUser,
  allUsers,
  oneUser,
  deleteUser,
} = require('./user.service');

async function create(req, res) {
  const userData = req.body;
  try {
    const user = await createUser(userData);
    return res.status(201).json({ message: 'User created', data: user });
  } catch (err) {
    return res
      .status(400)
      .json({ messaje: 'User could not be created', data: err });
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
  const { userId } = req.params;
  try {
    const user = await oneUser(userId);
    return res.status(200).json({ message: 'User found', data: user });
  } catch (err) {
    return res.status(400).json({ message: 'User not found', data: err });
  }
}

async function update(req, res) {
  const { userId } = req.params;
  const userData = req.body;
  try {
    const userUdated = await updateUser(userId, userData);
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

module.exports = { create, list, show, update, destroy };
