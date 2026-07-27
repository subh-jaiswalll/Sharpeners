
const express = require('express');

const router = express.Router();

const cartController = require('../controller/cartController.js')
router.get('/', cartController.getAllCarts);
router.post('/', cartController.getAllCartsById)
router.get('/:id', cartController.addCart);
module.exports = router;