const express = require("express");

const router = express.Router();

const students = [
  { id: 1, name: "Alice" },

  { id: 2, name: "Bob" },

  { id: 3, name: "Charlie" },
];
;

router.get('/', (req, res) =>{

    const names = students.map((student) => student.name).join(' , ')
    res.send(`Students ${names}`);
})

router.get('/:id', (req, res) => {

    const id = Number(req.params.id);
    
    const student = students.find((name) => name.id === id);

    if(!student){
        res.send('Student not found')
    }

    res.send(student);
})
module.exports = router;
