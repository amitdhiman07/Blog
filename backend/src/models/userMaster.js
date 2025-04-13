// Import Dependencies
const {sequelize} = require('../config/dbConnection');
const {DataTypes} = require('sequelize');


// Defines the table structure
async function UserMasterTableCreation(){
    try {
        const userMaster = await sequelize.define('userMaster' , {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            username:{
                type: DataTypes.STRING,
            },
            password:{
                type: DataTypes.STRING,
            }
        },{
            schema:'auth',
            tableName:'userMaster'
        });

        console.log('Initialized the User Master Table');
    } catch (error) {
        console.error('Failed to create the user master table in auth schema');
    }
}

module.exports = {UserMasterTableCreation};