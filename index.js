
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



app.get("/welcome/:name", (req, res) => {
    const name = req.params.name;
    const role = req.query.role;
    res.send(`Welcome ${name}, your role is ${role}`)
})

app.get('/products', (req, res) => {
    res.send('Here is the list of all products...')
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
app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
});


app.listen(PORT, () => console.log(`Server is running at PORT ${PORT}`))