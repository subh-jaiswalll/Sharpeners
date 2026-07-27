
const express = require("express");

const app = express();

const PORT  = 3000;


const userRoutes = require('./routes/userRoutes.js');

const productRoutes = require('./routes/productsRoutes.js');

const cartRoutes = require('./routes/cart.js');

app.use('/users', userRoutes);

app.use('/products', productRoutes);

app.use('/carts', cartRoutes);

// Expected Output Example
// For /users routes:
// GET /users returns: "Fetching all users"
// POST /users returns: "Adding a new user".
// GET /users/:id returns: "Fetching user with ID: id".
// For /products routes:
// GET /products returns: "Fetching all products".
// POST /products returns: "Adding a new product".
// GET /products/:id returns: "Fetching product with ID: id".
// For /cart routes:
// GET /cart/:userId returns: "Fetching cart for user with ID: userId".
// POST /cart/:userId returns: "Adding product to cart for user with ID: userId".



app.listen(PORT, () => console.log(`Server is running at PORT ${PORT}`))