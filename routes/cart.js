
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {

    res.send("Fetching all the Cart")
})

router.post('/', (req, res) => {
    res.send("Adding a new cart")
})

router.get('/:id', (req, res) => {
    res.send(`Fetching the cart with Id : ${req.params.id}`)
})

module.exports = router;