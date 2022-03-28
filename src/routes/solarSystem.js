const solarSystemController = require('../controllers/solarSystem');

const express = require('express');
const router = express.Router();

router.get('/', solarSystemController.index);
router.get('/:id', solarSystemController.find);

module.exports = router;