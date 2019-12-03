const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment.controller')

/**
 * get users list
 */
router.get('/', paymentController.getAllUsers);

/**
 * get users list by company
 */
router.get('/get-by-company/:id', paymentController.getAllUsersByCompany);

/**
 * add users
 */
router.post('/', paymentController.addUser);

/**
 * update user by id
 */
router.put('/:id', paymentController.updateUser); 

/**
 * delete user by id
 */
router.delete('/:id', paymentController.deleteUser);


/**
 * user status update by id
 */
router.put('/status-update/:id', paymentController.userStatusUpdate);

module.exports = router;