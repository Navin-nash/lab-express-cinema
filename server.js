// server.js

const express = require('express'); // Import express
const mongoose = require('mongoose'); // Import mongoose
const path = require('path'); // Import path if needed

const app = express(); // Initialize express app
const PORT = 3000; // Define your port number

// Middleware setup (if any)

// Your routes would go here

// Database connection (ensure this is done before starting the server)
const MONGODB_URI = "mongodb+srv://NavinRaj:Navinraj23@cluster0.kdi54.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Update with your Atlas connection string
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => { // Start the server after successful connection
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error('Database connection error:', err));
