const weaponController = require('../controllers/weapon');

const express = require('express');
const router = express.Router();

router.get('/', weaponController.index)
router.get('/:id', weaponController.find)

module.exports = router;
