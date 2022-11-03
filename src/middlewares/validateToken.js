const tokenCheck = require('../utils/tokenValidation');

const NOT_FOUND = 'Token not found';

const validateToken = (req, res, next) => {
    const data = req.header('Authorization');

    if (!data) {
        return res.status(401).json({ message: NOT_FOUND });
    }
    
    tokenCheck(data);
    next();
};

module.exports = validateToken;
