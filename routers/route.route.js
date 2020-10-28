const express = require('express');
const router = express.Router();
const routeController = require('../controllers/route.controller')

/**
 * get users list
 */
router.get('/', routeController.getAllUsers);

/**
 * get branch by company id
 */
router.get('/get-by-company/:id', routeController.getAllUsersByCompany);

/**
 * get users list
 */
router.get('/groupByCompany', routeController.groupByCompany);

/**
 * add users
 */
router.post('/', routeController.addUser);

/**
 * update user by id
 */
router.put('/:id', routeController.updateUser);

/**
 * delete user by id
 */
router.delete('/:id', routeController.deleteUser);


/**
 * user status update by id
 */
router.put('/status-update/:id', routeController.userStatusUpdate);

module.exports = router;