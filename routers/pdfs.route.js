const express = require('express');
const router = express.Router();
const pdfsController = require('../controllers/pdfs.controller')

/**
 * get users list
 */
router.get('/', pdfsController.getAllUsers);

module.exports = router;