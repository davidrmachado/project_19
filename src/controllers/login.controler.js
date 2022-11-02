const loginService = require('../services');

const loginValidation = async (req, res) => {
  const { email, error, password } = loginService.validateBody(req.body);
  
  if (error) {
    return res.status(400).json({ message: error });
  }

  const { token, errorMessage } = await loginService.validateLogin({ email, password });

  if (errorMessage) {
    return res.status(400).json({ message: errorMessage });
  }

  res.status(200).json({ token });
};

module.exports = { loginValidation };
