
const express = require('express');

const router = express.Router();

const productController = require('../controller/productController.js')
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getAllProductsById)
router.post('/', productController.addProduct);
module.exports = router;