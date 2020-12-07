const express = require('express');
const router = express.Router();
const brandController = require('../controllers/brand.controller')

/**
 * get users list
 */
router.get('/', brandController.getAllUsers);

/**
 * get users list by company
 */
router.get('/get-by-company/:id', brandController.getAllUsersByCompany);

/**
 * add users
 */
router.post('/', brandController.addUser);

/**
 * update user by id
 */
router.put('/:id', brandController.updateUser); 

/**
 * delete user by id
 */
router.delete('/:id', brandController.deleteUser);


/**
 * user status update by id
 */
router.put('/status-update/:id', brandController.userStatusUpdate);

module.exports = router;