const { User } = require('../models');

const { schema3 } = require('../utils/schemas');

const generatedToken = require('../utils/jwt');

const checkUser = async (data) => {
    const { error } = schema3.validate(data);
    const { email } = data;
    const storedEmail = await User.findAll({ where: { email } });

    if (error) {
        return { type: 400, message: error.message };
    }

    if (storedEmail.length !== 0) {
        return { type: 409, message: 'User already registered' };
    }

    return { type: null, message: '' };
};

const createUser = async (data) => {
    const validate = await checkUser(data);
    const addUser = await User.create(data);

    if (validate.type) {
        return { type: validate.type, message: validate.message };
    }

    return { type: null, message: generatedToken(addUser) };
};

const listUsers = async () => {
const attributes = ['id', 'displayName', 'email', 'image'];
const userList = await User.findAll({ attributes });

return { 
    message: userList,
    type: null,
};
};

module.exports = { 
    createUser,
    listUsers,    
};