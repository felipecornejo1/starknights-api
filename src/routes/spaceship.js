const spaceshipController = require('../controllers/spaceship');

const express = require('express');
const router = express.Router();

router.get('/', spaceshipController.index);
router.get('/:id', spaceshipController.find);

module.exports = router;