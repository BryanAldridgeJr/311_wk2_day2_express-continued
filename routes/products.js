const express = require('express');
const router = express.Router();
const { productsController } = require('./products');

router.get('/', productsController.list)

router.get('/:id', productsController.show)

router.post('/', productsController.create);



module.exports = router;