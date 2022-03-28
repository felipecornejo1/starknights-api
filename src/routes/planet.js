const planetController = require('../controllers/planet');

const express = require('express');
const router = express.Router();

router.get('/', planetController.index);
router.get('/:id', planetController.find);

module.exports = router;