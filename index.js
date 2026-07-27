
const express = require("express");

const app = express();

const PORT  = 3000;

app.use((req, res, next) => {
    console.log("Book Library");
    next();
})

app.use((req, res, next) => {
    console.log("Book Recomdation");
    next();
})

app.use('/library1', (req, res, next) => {
    res.send("<h1> Library 1 </h1>");
    next();
})

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => console.log(`Server is running at PORT ${PORT}`))