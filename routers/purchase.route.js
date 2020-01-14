const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/purchase.controller')

/**
 * get users list
 */
router.get('/', purchaseController.getAllUsers);

/**
 * get users list
 */
router.get('/last-invoice/:id', purchaseController.getLastInvoice);

/**
 * get users list by company
 */
router.get('/get-by-company/:id', purchaseController.getAllUsersByCompany);

/**
 * add users
 */
router.post('/', purchaseController.addUser);

/**
 * update user by id
 */
router.put('/:id', purchaseController.updateUser);

/**
 * delete user by id
 */
router.delete('/:id', purchaseController.deleteUser);


/**
 * user status update by id
 */
router.put('/status-update/:id', purchaseController.userStatusUpdate);

module.exports = router;