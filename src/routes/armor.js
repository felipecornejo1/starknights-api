const armorController = require('../controllers/armor');

const express = require('express');
const router = express.Router();

router.get('/', armorController.index)
router.get('/:id', armorController.find)

module.exports = router;
