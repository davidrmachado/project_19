const express = require('express');

const router = express.Router();

const validateToken = require('../middlewares/validateToken');
const postControler = require('../controllers/post.controler');

router.use(validateToken);

router.post('/', postControler.addPost);

module.exports = router;