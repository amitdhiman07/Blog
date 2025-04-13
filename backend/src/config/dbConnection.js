// Import Dependencies 
// Connecting to the database
const { Sequelize } = require('sequelize');

//loads the database configuration from the environment file
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT, 
        dialect: process.env.DB_DIALECT
    }
);

// Test the database connection
async function DBConnectionChecker() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
       console.error('Not Connecting to the database '); 
    }
}

  module.exports = {sequelize , DBConnectionChecker};