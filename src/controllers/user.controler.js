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

const findById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.findById(id);

  if (user.type) {
    return res.status(user.type).json({ message: user.message });
  }

  res.status(200).json(user.message);
};

module.exports = { 
  createUser,
  listUsers,
  findById,
};