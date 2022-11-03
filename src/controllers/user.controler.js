const { userService } = require('../services');

const createUser = async (req, res) => {
    const addUser = await userService.createUser(req.body);

    if (addUser.type) {
      return res.status(addUser.type).json({ message: addUser.message });
    }

    res.status(201).json({ token: addUser.message });
};

module.exports = { createUser };