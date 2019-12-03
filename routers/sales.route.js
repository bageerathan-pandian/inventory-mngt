const express = require('express');
const router = express.Router();
const salesController = require('../controllers/sales.controller')

/**
 * get users list
 */
router.get('/', salesController.getAllUsers);

/**
 * get users list
 */
router.get('/last-invoice', salesController.getLastInvoice);

/**
 * get users list
 */
router.get('/total-sales', salesController.getTotalSales);

/**
 * get users list by company
 */
router.get('/get-by-company/:id', salesController.getAllUsersByCompany);

/**
 * add users
 */
router.post('/', salesController.addUser);

/**
 * update user by id
 */
router.put('/:id', salesController.updateUser);

/**
 * delete user by id
 */
router.delete('/:id', salesController.deleteUser);


/**
 * user status update by id
 */
router.put('/status-update/:id', salesController.userStatusUpdate);

module.exports = router;