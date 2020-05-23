const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stock.controller')

/**
 * get users list
 */
router.get('/', stockController.getAllUsers);

/**
 * get users list by company
 */
router.get('/get-by-company/:id', stockController.getAllUsersByCompany);


/**
 * get users list by company
 */
router.get('/get-by-company-slug/:slug', stockController.getAllUsersByCompanySlug);


/**
 * get users list by company
 */
router.get('/get-by-company-active/:id', stockController.getAllUsersByCompanyActive);


/**
 * add users
 */
router.post('/', stockController.addUser);

/**
 * update user by id
 */
router.put('/:id', stockController.updateUser);

/**
 * delete user by id
 */
router.delete('/:id', stockController.deleteUser);


/**
 * user status update by id
 */
router.put('/status-update/:id', stockController.userStatusUpdate);

module.exports = router;