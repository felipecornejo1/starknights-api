const itemController = require('../controllers/item');

const express = require('express');
const router = express.Router();

router.get('/', itemController.index)

module.exports = router;
