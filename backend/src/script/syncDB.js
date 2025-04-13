// Importing the sequelize
const {sequelize , DBConnectionChecker} = require('../config/dbConnection');

// importing schema file for schema creation
const {SchemaCreation} = require('../schema/schema')

// importing Table Setup
const {TableSetup} = require('../script/tableStructure')


// the database connection and model synchronization
async function DbConfiguration() {
    try {
        await DBConnectionChecker();
        console.log('Database connection is established');
        
        await SchemaCreation();
        console.log('Schema created successfully');

        await TableSetup();
        console.log('Executed the table Structure');

        await sequelize.sync({alter:true});
        console.log('Database models are synchronized');
    } catch (error) {
        console.error('Database configuration failed:', error);
    }
    
}

module.exports = DbConfiguration;