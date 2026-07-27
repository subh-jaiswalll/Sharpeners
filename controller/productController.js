
const productService = require('../service/productService.js')

const getAllProducts = (req, res) => {

    const result = productService.getAllProducts();
    res.send(result)
}

const getAllProductsById = (req, res) => {

    const result = productService.getAllProductsById(req.params.id);
    res.send(result)
}

const addProduct = (req, res) => {
    const result = productService.addProduct();
    res.send(result)
}
module.exports = {
    getAllProducts,
    getAllProductsById,
    addProduct
}

