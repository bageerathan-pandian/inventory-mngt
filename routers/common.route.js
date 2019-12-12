const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contact.controller')

/**
 * send contact form
 */
router.post('/contact', contactController.sentContact);


module.exports = router;