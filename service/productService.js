

const getAllProducts = () => {
    return "Fetching all the products";
}

const getAllProductsById = (id) => {
    return `Fetching the product by Id : ${id}`;

}

const addProduct = () =>{
    return "Adding a products"
}

module.exports = {
    getAllProducts,
    getAllProductsById,
    addProduct
}