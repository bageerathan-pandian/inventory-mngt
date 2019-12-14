const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contact.controller')

/**
 * send contact form
 */
router.post('/', contactController.sentMail);


/**
 * list contact
 */
router.get('/', contactController.getContact);


module.exports = router;