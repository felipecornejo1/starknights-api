const userController = require('../controllers/user');

const express = require('express');
const router = express.Router();

router.get('/', userController.index);
router.get('/:id', userController.find);

module.exports = router;