
const productService = require('../service/productService.js')

const path = require('path');


const getAllProducts = (req, res) => {

    res.sendFile(path.join(__dirname, "..", "view", "product.html"));
}

const getAllProductsById = (req, res) => {

    const result = productService.getAllProductsById(req.params.id);
    res.send(result)
}

const addProduct = (req, res) => {
    
    const data = req.body;

    console.log(data);
    res.json({value : data.productName})
}
module.exports = {
    getAllProducts,
    getAllProductsById,
    addProduct
}

