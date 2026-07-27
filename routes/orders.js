
const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send("Here is list of all orders")
})

router.post('/', (req, res) => {
    res.send("Add the orders..")
})


module.exports = router;