const express = require('express');

const router = express.Router();

const authController = require('../controllers/auth.controler');

router.post('/', authController.userLogin);

module.exports = router;