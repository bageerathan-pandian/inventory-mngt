const express = require('express');
const router = express.Router();
const reportController = require('../controllers/report.controller')

/**
 * get users list
 */
router.post('/get-sales-report', reportController.getAllSalesByCompany);


module.exports = router