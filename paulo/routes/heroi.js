const express = require('express');
const router = express.Router();
const controller = require('./..controllers/heroi')

router.post('/', controller.post);
router.post('/', controller.post);

module.exports = router;