const passController = require('../controllers/pass');

const express = require('express');
const router = express.Router();

router.get('/', passController.index)
router.get('/:id', passController.find)

module.exports = router;
