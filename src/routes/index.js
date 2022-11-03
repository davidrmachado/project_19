const express = require('express');

const errorHandler = require('../utils/errorHandler');

const router = express.Router();
const loginRouter = require('./login.router');
const userRouter = require('./user.router');
const categoryRouter = require('./category.router');

router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/categories', categoryRouter);

router.use(errorHandler);

module.exports = router;