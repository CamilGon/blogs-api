const { generateToken } = require('../middlewares/generateToken');
const { User } = require('../models');
const userService = require('../services/userService');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const token = await userService.loginUser(email, password);
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const existingUser = await User.findOne({ where: { email } });

  if (existingUser) {
    return res.status(409).json({ message: 'User already registered' });
  }
  try {
    const newUser = await userService.createUser(displayName, email, password, image);
    const token = generateToken(newUser);
    return res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users' });
  }
};

module.exports = {
  login,
  createUser,
  getAllUsers,
};
