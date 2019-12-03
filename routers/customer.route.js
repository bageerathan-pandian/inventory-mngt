const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customer.controller')

/**
 * get users list
 */
router.get('/', customerController.getAllUsers);

/**
 * get users list by company
 */
router.get('/get-by-company/:id', customerController.getAllUsersByCompany);

/**
 * add users
 */
router.post('/', customerController.addUser);

/**
 * update user by id
 */
router.put('/:id', customerController.updateUser);

/**
 * delete user by id
 */
router.delete('/:id', customerController.deleteUser);


/**
 * user status update by id
 */
router.put('/status-update/:id', customerController.userStatusUpdate);

module.exports = router;