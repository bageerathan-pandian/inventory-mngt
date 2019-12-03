const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller')

/**
 * get users list
 */
router.get('/', userController.getAllUsers);

/**
 * get users list by company
 */
router.get('/get-by-company/:id', userController.getAllUsersByCompany);
/**
 * get users list by company
 */
router.get('/:id', userController.getUserById);

/**
 * add users
 */
router.post('/', userController.addUser);

/**
 * update user by id
 */
router.put('/:id', userController.updateUser);

/**
 * delete user by id
 */
router.delete('/:id', userController.deleteUser);


/**
 * user status update by id
 */
router.put('/status-update/:id', userController.userStatusUpdate);

/**
 * user email exist check
 */
router.get('/check-email-exist/:user_email', userController.checkEmailExist);

module.exports = router;