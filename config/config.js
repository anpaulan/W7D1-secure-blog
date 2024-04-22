// config/config.js

// Importing the mongoose library for MongoDB database interaction
const mongoose = require("mongoose");

// Function to establish connection with MongoDB database
const CONNECTDB = (url) => {
    console.log(url)
    // Attempting to connect to the MongoDB database using the provided URL
    mongoose.connect(url)
        .then(() => {
            // Logging a success message if the connection is established
            console.log("Database is connected");
        })
        .catch((err) => {
            // Logging any errors encountered during the connection process
            console.log(err);
        });
};

// Exporting the CONNECTDB function to make it accessible in other modules
module.exports = CONNECTDB;