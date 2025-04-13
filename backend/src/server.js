// Import Dependencies
const express = require('express');
const app = express();

// Importing files
const {DBConnectionChecker} = require('./config/dbConnection');
const DbConfiguration = require('./script/syncDB')

// loads the environmental variable values 
require('dotenv').config();
const PORT = process.env.SERVER_PORT;


// Creates the server
app.listen(PORT , async () => {
    try {
        console.log(`Server is running on ${PORT}`);
        await DbConfiguration(); // Synchronizes the database
    } catch (error) {
        console.error("Failed to create server " , error);
    }
});