


const getAllProducts = (req, res) => {
    res.send("Fetching all the products")
}

const getAllProductsById = (req, res) => {
    res.send(`Fetching the products by Id : ${req.params.id}`)
}

const addProduct = (req, res) => {
    res.send("Add a new product")
}
module.exports = {
    getAllProducts,
    getAllProductsById,
    addProduct
}

