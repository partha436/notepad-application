``
// Import the Express module
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

// Create an Express application
const app = express();

// Define the port
const port = 3000;

var mongoConnectString = ""
// Connect to MongoDB using Mongoose
mongoose.connect(mongoConnectString)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB", err);
    });

// Define a schema for the notes
const noteSchema = new mongoose.Schema({
    title: String,
    content: String,
    createdAt: { type: Date, default: Date.now }
});
// Create a model from the schema
const Note = mongoose.model('Note', noteSchema);
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

app.post("/create",async  (req, res) => {
    const { content } = req.body; // Destructure title and content from the request body

    try {
        // Create a new note
        const newNote = new Note({
            title: "",
            content
        });

        // Save the note to MongoDB
        await newNote.save();

        res.status(201).send('Note created successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error saving note');
    }
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