// Import Dependencies
const { sequelize } = require('../config/dbConnection');
const { DataTypes } = require('sequelize');

// Define the model globally so you can export it
const UserMaster = sequelize.define('userMaster', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    schema: 'auth',
    tableName: 'userMaster'
});

// Optional: Sync it in a setup function
async function UserMasterTableCreation() {
    try {
        await UserMaster.sync({ alter: true }); // or force: true
        console.log('Initialized the User Master Table');
    } catch (error) {
        console.error('Failed to create the user master table in auth schema:', error);
    }
}

module.exports = { UserMasterTableCreation, UserMaster };
