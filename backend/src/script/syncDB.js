// Importing the sequelize
const {sequelize , DBConnectionChecker} = require('../config/dbConnection');

// importing schema file for schema creation
const {SchemaCreation} = require('../schema/schema')


// the database connection and model synchronization
async function DbConfiguration() {
    try {
        await DBConnectionChecker();
        console.log('Database connection is established');
        await SchemaCreation();
        console.log('Schema created successfully');
        await sequelize.sync({alter:true});
        console.log('Database models are synchronized');
    } catch (error) {
        
    }
    
}

module.exports = DbConfiguration;