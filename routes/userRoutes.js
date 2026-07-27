
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {

    res.send("Fetching all the Users")
})

router.post('/', (req, res) => {
    res.send("Adding a new User")
})

router.get('/:id', (req, res) => {
    res.send(`Fetching the user with Id : ${req.params.id}`)
})

module.exports = router;