const express = require('express');
const router = express.Router();
const unitController = require('../controllers/unit.controller')

/**
 * get users list
 */
router.get('/', unitController.getAllUsers);

/**
 * get branch by company id
 */
router.get('/get-by-company/:id', unitController.getAllUsersByCompany);

/**
 * get users list
 */
router.get('/groupByCompany', unitController.groupByCompany);

/**
 * add users
 */
router.post('/', unitController.addUser);

/**
 * update user by id
 */
router.put('/:id', unitController.updateUser);

/**
 * delete user by id
 */
router.delete('/:id', unitController.deleteUser);


/**
 * user status update by id
 */
router.put('/status-update/:id', unitController.userStatusUpdate);

module.exports = router;