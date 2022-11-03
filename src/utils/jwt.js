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

// const validateToken = (token) => {
//   try {
//     const { data } = jwt.verify(token, secretWord);

//     return { data };
//   } catch (error) {
//     return { error: 'Invalid Token' };
//   }
// };

module.exports = createToken;
