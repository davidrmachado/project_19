require('dotenv/config');

const jwt = require('jsonwebtoken');

const EXPIRED_ERROR = 'Expired or invalid token';

const tokenValidation = (data) => {
    try {
        const { status } = jwt.verify(data, process.env.JWT_SECRET);
        return status;
    } catch (error) {
        const err = new Error(EXPIRED_ERROR);
        err.statusCode = 401;
        throw err;
    }
};

module.exports = tokenValidation;
