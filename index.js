
const express = require("express");

const app = express();

const PORT  = 3000;

const studentRoutes = require('./routes/studentRoutes.js');

const courseRoutes = require('./routes/courseRoutes.js');




app.use('/student', studentRoutes);

app.use('/course', courseRoutes);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Student & Course Portal API!");
})


app.use((req, res) => {
  res.status(404).send('Page not found')
})



// Home Route:
// GET /
// Response: "Welcome to the Student & Course Portal API!"
// Student Routes:
// GET /students
// Response: "Students: Alice, Bob, Charlie
// GET /students/1
// Response: "Student: Alice"
// GET /students/99
// Response: "Student not found
// Course Routes:
// GET /courses
// Response: "Courses: Frontend, Backend"
// GET /courses/1
// Response: "Course: Frontend, Description: HTML, CSS, JS, React"
// GET /courses/99
// Response: "Course not found
// Invalid Route:
// Example: GET /invalid
// Response: "Page not found"



app.listen(PORT, () => console.log(`Server is running at PORT ${PORT}`))