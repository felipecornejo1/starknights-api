const itemController = require('../controllers/item');

const express = require('express');
const router = express.Router();

router.get('/', itemController.index)
router.get('/:id', itemController.find)

module.exports = router;
