const Joi = require('joi');

const schema1 = Joi.object({
    email: Joi.string().email().min(8).required(),
    password: Joi.string().required(),
});

const schema2 = Joi.object({
    email: Joi.string().email().required(),
    displayName: Joi.string().min(8).required(),
    password: Joi.string().min(6).required(),
});

const schema3 = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string(),
});

const schema4 = Joi.object({
    name: Joi.string().required(),
});

module.exports = { 
    schema1, 
    schema2,
    schema3,
    schema4,
};
