// Dependencies
const {sequelize} = require('../config/dbConnection');
const { DataTypes } = require('sequelize');


// creates the userDetails table
const UserDetails = sequelize.define('userDetails', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
    }
},{
    schema:'auth',
    tableName:'userDetails',
});

async function UserDetailsTableCreation() {
    try {
        await UserDetails.sync({ alter: true });
        console.log('UserDetails Table created successfully');
    } catch (error) {
        console.log('Failed to create a userDetails table');
    }
}

module.exports = {UserDetailsTableCreation , UserDetails};