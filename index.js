
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


// Set up a dynamic GET route:

// Create a route in your Express app with a route parameter in the URL.

// Example: /welcome/:username

// This allows the app to extract the username directly from the URL.

// Use a query parameter for additional info:

// Accept a query parameter (like role) in the same request URL.

// Example: /welcome/Julian?role=Admin

// This allows the app to extract extra data from the query string.

// Extract values inside your route handler:

// Use Express methods to retrieve the route parameter and query parameter.

// Use them to customize your response.

// Send a personalized response:

// Send an response with a message that uses both the username and role.

// For example: Welcome Julian, your role is Admin

// Test your route using Postman and push the code to Github:

// Try different combinations of route and query parameters in Postman to make sure your app handles them correctly.


app.get("/welcome/:name", (req, res) => {
    const name = req.params.name;
    const role = req.query.role;
    res.send(`Welcome ${name}, your role is ${role}`)
})

// app.post('/products', (req, res) => {

//     res.send(' A new product has been created...')
// })

// app.get('/categories', (req, res) => {
//     res.send('Here is the list of all categories...')
// })

// app.post('/categories', (req, res) => {
//     res.send('A new categories has been created...')
// })

// app.use((req, res) => {
//     res.status(404).send('<h1>404 - Page Not Found</h1>');
// });


app.listen(PORT, () => console.log(`Server is running at PORT ${PORT}`))