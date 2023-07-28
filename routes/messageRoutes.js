const express = require('express');
const messageController = require('../controllers/messageController');

const router = express.Router();

router.route('/')
.get(messageController.getAllMessages);

router.route('/create')
.post(messageController.createMessage);

module.exports = router;
