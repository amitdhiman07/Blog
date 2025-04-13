// Import Dependencies
const express = require('express');
const app = express();


// loads the environmental variable values 
require('dotenv').config();
const PORT = process.env.SERVER_PORT;


// Creates the server
app.listen(PORT , () => {
    try {
        console.log(`Server is running on ${PORT}`);
    } catch (error) {
        console.error("Failed to create server " , error);
    }
});