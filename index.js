
const express = require("express");
const path = require('path')
const app = express();

const PORT  = 3000;


const userRoutes = require('./routes/userRoutes.js');

const productRoutes = require('./routes/productsRoutes.js');

const cartRoutes = require('./routes/cartRoutes.js');

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json())

app.use('/users', userRoutes);

app.use('/products', productRoutes);

app.use('/carts', cartRoutes);



app.listen(PORT, () => console.log(`Server is running at PORT ${PORT}`))