const sunController = require('../controllers/sun');

const express = require('express');
const router = express.Router();

router.get('/', sunController.index);
router.get('/:id', sunController.find);

module.exports = router;