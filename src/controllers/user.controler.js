const { userService } = require('../services');

const createUser = async (req, res) => {
    const addUser = await userService.createUser(req.body);

    if (addUser.type) {
      return res.status(addUser.type).json({ message: addUser.message });
    }

    res.status(201).json({ token: addUser.message });
};

const listUsers = async (_req, res) => {
  const usersList = await userService.listUsers();
  
  res.status(200).json(usersList.message);
};

module.exports = { 
  createUser,
  listUsers,
};