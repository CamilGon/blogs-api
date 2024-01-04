const { User } = require('../models');
const { generateToken } = require('../middlewares/generateToken');

const loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user || user.password !== password) {
    throw new Error('Invalid fields');
  }
  const token = generateToken(user);
  return token;
};

const createUser = async (displayName, email, password, image) => {
  const newUser = await User.create({ displayName, email, password, image });
  return newUser;
};

module.exports = {
  loginUser,
  createUser,
};
