const { User } = require('../models');

const generatedToken = require('../utils/jwt');

const validation = async (email) => {
    const user = await User.findAll({ where: { email },
        attributes: ['email', 'password'],
    });

    return user;
};

const entryValiation = async (entry) => {
    const { email, password } = entry;
    const user = await validation(email);
    const invalidFields = { type: 400, message: 'Invalid fields' };

    if (!email || !password) {
      return { type: 400, message: 'Some required fields are missing' };
    }

    if (user.length === 0) {
      return invalidFields;
    }

    if (user[0].password !== password) {
      return invalidFields;
    }

    return { type: null, message: user[0] };
};

const userLogin = async (req, res) => {
    const { body } = req;
    const { type, message } = await entryValiation(body);

    if (type) {
      return res.status(type).json({ message });
    }

    const token = generatedToken(body);

    res.status(200).json({ token });
};

module.exports = { userLogin };