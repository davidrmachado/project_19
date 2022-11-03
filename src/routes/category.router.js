const express = require('express');
const validateToken = require('../middlewares/validateToken');

const categoryControler = require('../controllers/category.controler');

const router = express.Router();

router.use(validateToken);

router.post('/', validateToken, categoryControler.postCategory);

module.exports = router;