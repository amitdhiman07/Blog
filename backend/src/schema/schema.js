// Import Dependencies
const {sequelize} = require('../config/dbConnection')


// Create schema
async function SchemaCreation() {
    try {
        await sequelize.createSchema('auth');
        console.log('Schema created successfully (auth)');

        await sequelize.createSchema('blog');
        console.log('Schema created successfully (blog)');
    } catch (error) {
        console.error('Failed to create schema ' , error);
    }
    
}

module.exports = {SchemaCreation};