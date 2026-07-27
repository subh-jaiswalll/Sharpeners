
const express = require("express");

const app = express();

const PORT  = 3000;

// app.use((req, res, next) => {
//     console.log("Book Library");
//     next();
// })

// app.use((req, res, next) => {
//     console.log("Book Recomdation");
//     next();
// })

// app.use('/library1', (req, res, next) => {
//     res.send("<h1> Library 1 </h1>");
//     next();
// })


// GET /products - Respond with "Here is the list of all products."



// POST /products - Respond with "A new product has been added."



// GET /categories - Respond with "Here is the list of all categories."



// POST /categories - Respond with "A new category has been created."


app.get("/products", (req, res) => {
    res.send("Here is the list of all products")
})

app.post('/products', (req, res) => {

    res.send(' A new product has been created...')
})

app.get('/categories', (req, res) => {
    res.send('Here is the list of all categories...')
})

app.post('/categories', (req, res) => {
    res.send('A new categories has been created...')
})

app.use((req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});


app.listen(PORT, () => console.log(`Server is running at PORT ${PORT}`))