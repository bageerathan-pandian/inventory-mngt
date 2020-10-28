const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard.controller')

/**
 * get logged in users
 */
router.get('/logged-in-users', dashboardController.getLoggedInUsers);

/**
 * get latest-stock 5
 */
router.get('/latest-stock/:id', dashboardController.getLatestStock);

/**
 * get latest-sales 5
 */
router.get('/latest-sales/:id', dashboardController.getLatestSales);

/**
 * get latest-purchase 5
 */
router.get('/latest-purchase/:id', dashboardController.getLatestPurchase);

/**
 * get profit loss
 */
router.get('/profit-loss/:id', dashboardController.getProfitLoss);


module.exports = router;