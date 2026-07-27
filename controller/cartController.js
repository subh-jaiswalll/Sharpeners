


const getAllCarts = (req, res) => {
    res.send("Fetching all the Carts")
}

const getAllCartsById = (req, res) => {
    res.send(`Fetching the Carts by Id : ${req.params.id}`)
}

const addCart = (req, res) => {
    res.send("Add a new cart")
}
module.exports = {
    getAllCarts,
    getAllCartsById,
    addCart
}

