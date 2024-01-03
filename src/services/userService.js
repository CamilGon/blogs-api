const jwt = require('jsonwebtoken');
const { User } = require('../models');

const loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user || user.password !== password) {
    throw new Error('Invalid fields');
  }
  const token = jwt.sign(
    { sub: user.id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: '1h' },
  );
  return token;
};

module.exports = {
  loginUser,
};
