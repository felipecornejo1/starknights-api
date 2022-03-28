const planetController = require('../controllers/planet');

const express = require('express');
const router = express.Router();

router.get('/', planetController.index);

module.exports = router;