const express = require('express');
const router = express.Router();
const taxController = require('../controllers/tax.controller')

/**
 * get users list
 */
router.get('/', taxController.getAllUsers);

/**
 * get branch by company id
 */
router.get('/get-by-company/:id', taxController.getAllUsersByCompany);

/**
 * get users list
 */
router.get('/groupByCompany', taxController.groupByCompany);

/**
 * add users
 */
router.post('/', taxController.addUser);

/**
 * update user by id
 */
router.put('/:id', taxController.updateUser);

/**
 * delete user by id
 */
router.delete('/:id', taxController.deleteUser);


/**
 * user status update by id
 */
router.put('/status-update/:id', taxController.userStatusUpdate);

module.exports = router;