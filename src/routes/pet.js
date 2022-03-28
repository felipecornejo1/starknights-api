const petController = require('../controllers/pet');

const express = require('express');
const router = express.Router();

router.get('/', petController.index)
router.get('/:id', petController.find)

module.exports = router;
