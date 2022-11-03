const express = require('express');

const router = express.Router();

const userController = require('../controllers/user.controler');

router.post('/', userController.createUser);

module.exports = router;