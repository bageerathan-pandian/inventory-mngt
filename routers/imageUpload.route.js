const express = require('express');
const router = express.Router();
const imageUploadController = require('../controllers/imageUpload.controller')

/**
 * image upload
 */
router.post('/', imageUploadController.imageUpload);

/**
 * profileimage upload
 */
router.post('/profile', imageUploadController.profileImageUpload);

/**
 * logo image upload
 */
router.post('/logo', imageUploadController.logoUpload);

module.exports = router;