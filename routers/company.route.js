const express = require('express');
const router = express.Router();
const companyController = require('../controllers/company.controller')

/**
 * get users list
 */
router.get('/', companyController.getAllUsers);

/**
 * get admin users list
 */
router.get('/admin-users', companyController.getAllAdminUsers);


/**
 * get all company list
 */
router.get('/get-all-companies', companyController.getAllCompanies);


/**
 * get users list
 */
router.get('/groupByCompany', companyController.groupByCompany);

/**
 * add users
 */
router.post('/', companyController.addUser);

/**
 * update user by id
 */
router.put('/:id', companyController.updateUser);

/**
 * delete user by id
 */
router.delete('/:id', companyController.deleteUser);


/**
 * user status update by id
 */
router.put('/status-update/:id', companyController.userStatusUpdate);

module.exports = router;