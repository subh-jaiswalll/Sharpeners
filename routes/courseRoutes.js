
const express = require('express');

const router = express.Router();

const courses = [
  { 
    id: 1,
    name: "Frontend", 
    description: "HTML, CSS, JS, React" 
},

  { 
    id: 2, 
    name: "Backend", 
    description: "Node.js, Express, MongoDB" 
},
];

router.get('/', (req, res) => {

    const course = courses.map((name) => name.name).join(' , ');

    res.send(course);
})


router.get('/:id', (req, res) => {
    const id = Number(req.params.id);

    const course = courses.find(course => course.id === id);

    if (!course) {
        return res.send("Course not found");
    }

    res.send(course)
})
module.exports = router;