const express = require('express');

const router = express.Router();

const userController = require('../controllers/user.controler');

const validateToken = require('../middlewares/validateToken');

router.post('/', userController.createUser);
router.get('/', validateToken, userController.listUsers);
router.get('/:id', validateToken, userController.findById);

module.exports = router;
