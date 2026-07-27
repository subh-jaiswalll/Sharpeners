
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

// GET /orders - Respond with "Here is the list of all orders."



// POST /orders - Respond with "A new order has been created."



// GET /users - Respond with "Here is the list of all users."



// POST /users - Respond with "A new user has been added."


app.get("/orders", (req, res) => {
    res.send("Here is the list of all orders")
})

app.post('/orders', (req, res) => {

    res.send(' A new order has been created...')
})

app.get('/users', (req, res) => {
    res.send('Here is the list of all users...')
})

app.post('/users', (req, res) => {
    res.send('A new user has been created...')
})

app.listen(PORT, () => console.log(`Server is running at PORT ${PORT}`))