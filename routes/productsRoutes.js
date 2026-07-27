
const express = require('express');

const router = express.Router();

const productController = require('../controller/productController.js')
router.get('/', productController.getAllProducts);
router.post('/', productController.getAllProductsById)
router.get('/:id', productController.addProduct);
module.exports = router;