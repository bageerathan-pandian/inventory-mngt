const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller')

/**
 * get users list
 */
router.get('/', categoryController.getAllUsers);

/**
 * get users list by company
 */
router.get('/get-by-company/:id', categoryController.getAllUsersByCompany);

/**
 * add users
 */
router.post('/', categoryController.addUser);

/**
 * update user by id
 */
router.put('/:id', categoryController.updateUser); 

/**
 * delete user by id
 */
router.delete('/:id', categoryController.deleteUser);


/**
 * user status update by id
 */
router.put('/status-update/:id', categoryController.userStatusUpdate);

module.exports = router;