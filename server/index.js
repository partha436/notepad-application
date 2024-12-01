``
// Import the Express module
const cors = require('cors');
const express = require('express');

// Create an Express application
const app = express();

// Define the port
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Define a route
app.get('/', (req, res) => {
    var x = 1;
    var y = 2;
    var z = 1 + 2
    console.log(z)
    res.send('Hello, World!');
});

app.post("/create", (req, res) => {
    const body = req.body;
    console.log(req.body);

    res.send('ok');
})

app.put("/update", (req, res) => {
    console.log(req.body);
})

app.delete("/delete", (req, res) => {
    console.log(req.body);
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


// BaseURL: http://localhost:3000/
// 