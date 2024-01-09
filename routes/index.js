const express = require('express');
const router = express.Router();
const commentRoutes = require('./comments');
const contactRoutes = require('./contacts');
const productRoutes = require('./products');
const vehicleRoutes = require('./vehicles');

router.use('/comments', commentRoutes);
router.use('/contacts', contactRoutes);
router.use('/products', productRoutes);
router.use('/vehicles', vehicleRoutes);

module.exports = router;