const Joi = require('joi');

const jwtUtil = require('../utils/jwt');

const { User } = require('../models');

const validateBody = (params) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  const { error, value } = schema.validate(params);

  if (error) {
    const errorMessage = 'Some required fields are missing';
    
    return { error: errorMessage };
  }

  return value;
};

const validateLogin = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    const errorMessage = 'Invalid fields';
    
    return { errorMessage };
  }

  const { password: _, ...userWithoutPassword } = user.dataValues;

  const token = jwtUtil.createToken(userWithoutPassword);

  return { token };
};

module.exports = { validateBody, validateLogin };
