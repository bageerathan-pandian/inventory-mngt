const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplier.controller')

/**
 * get users list
 */
router.get('/', supplierController.getAllUsers);

/**
 * get users list by company
 */
router.get('/get-by-company/:id', supplierController.getAllUsersByCompany);

/**
 * add users
 */
router.post('/', supplierController.addUser);

/**
 * update user by id
 */
router.put('/:id', supplierController.updateUser);

/**
 * delete user by id
 */
router.delete('/:id', supplierController.deleteUser);


/**
 * user status update by id
 */
router.put('/status-update/:id', supplierController.userStatusUpdate);

module.exports = router;