require('dotenv/config');

const jwt = require('jsonwebtoken');

const secretWord = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (data) => {
  const token = jwt.sign({ data }, secretWord, jwtConfig);

  return token;
};

module.exports = createToken;
