const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoice.controller')

/**
 * get users list by company
 */
router.get('/get-by-company-sales/:id', invoiceController.getAllUsersByCompanySales);

/**
 * get users list by company
 */
router.get('/get-by-company-sales-by-id/:id/:comp_id', invoiceController.getAllUsersByCompanySalesById);

/**
 * get users list by company
 */
router.get('/get-by-company-purchase/:id', invoiceController.getAllUsersByCompanyPurchase);


/**
 * update user by id
 */
router.put('/:id', invoiceController.updateUser); 

/**
 * user status update by id
 */
router.put('/status-update/:id', invoiceController.userStatusUpdate);


/**
 * get users list
 */
router.get('/total-sales/:id', invoiceController.getTotalSales);

/**
 * get users list
 */
router.get('/total-purchase/:id', invoiceController.getTotalPurchase);

/**
 * get users list by company
 */
router.get('/get-by-company-customer-collection/:id', invoiceController.getAllUsersByCompanyCustomerCollection);


/**
 * get users list by company
 */
router.get('/get-by-company-supplier-collection/:id', invoiceController.getAllUsersByCompanySupplierCollection);


module.exports = router;