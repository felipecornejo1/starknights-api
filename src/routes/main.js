const mainController = require('../controllers/main');

const express = require('express');
const router = express.Router();

router.get('/', mainController.index)

module.exports = router;
