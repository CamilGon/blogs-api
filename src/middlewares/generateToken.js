const jwt = require('jsonwebtoken');

const generateToken = (newUser) =>
  jwt.sign(
    {
      id: newUser.id,
      displayName: newUser.displayName,
      email: newUser.email,
      image: newUser.image,
    },
    process.env.JWT_SECRET,
    { expiresIn: '1h' },
  );

module.exports = {
  generateToken,
};
