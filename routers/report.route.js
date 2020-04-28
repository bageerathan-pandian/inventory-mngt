const express = require('express');
const router = express.Router();
const reportController = require('../controllers/report.controller')

/**
 * get sales report list
 */
router.post('/get-sales-report', reportController.getAllSalesByCompany);


/**
 * get purchase report list
 */
router.post('/get-purchase-report', reportController.getAllPurchaseByCompany);


module.exports = router