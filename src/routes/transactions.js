const transactionController = require('../controllers/transaction');

const express = require('express');
const router = express.Router();

router.get('/', transactionController.index);
router.get('/:id', transactionController.find);

module.exports = router;