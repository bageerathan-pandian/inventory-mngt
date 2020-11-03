const express = require('express');
const router = express.Router();
const collectionController = require('../controllers/collection.controller')

/**
 * get users list
 */
router.get('/', collectionController.getAllUsers);

/**
 * get branch by company id
 */
router.get('/customer/get-by-company/:id', collectionController.getAllUsersByCompany);


/**
 * get branch by company id
 */
router.get('/customer/get-by-company-and-customer-id/:com_id/:cust_id', collectionController.getAllUsersByCustomer);


/**
 * get branch by company id
 */
router.get('/customer/get-total-collection/:id', collectionController.getTotalCollection);



/**
 * get users list
 */
router.get('/customer/groupByCompany', collectionController.groupByCompany);

/**
 * add users
 */
router.post('/customer/', collectionController.addUser);

/**
 * update user by id
 */
router.put('/customer/:id', collectionController.updateUser);

/**
 * delete user by id
 */
router.delete('/customer/:id', collectionController.deleteUser);


/**
 * user status update by id
 */
router.put('/customer/status-update/:id', collectionController.userStatusUpdate);

module.exports = router;