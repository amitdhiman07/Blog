// Importing dependencies
const express = require('express');
const sequelize = require('../config/dbConnection');

// Importing table 
const { UserMaster } = require('../models/userMaster');
const { UserDetails } = require('../models/userDetails');

const router = express.Router();


// Post Method
router.post('/post' , async (req , res) => {
    try {
        // Passing username and password in the request body.
        const {username , password , name , email } = req.body;

        // For user master table.
        if(username && password){
            // inserting username and password in the UserMaster table.
            const resultData = await UserMaster.create({username , password});
            res.json(resultData);
            console.log('Data has been inserted in the user Master table');
        }  

        // For user details table.
        if(name && email && password){
            // inserting name , email and password in the userDetails table.
            const result = await UserDetails.create({name , email , password});
            // res.json(result);
            res.status(201).json(result); 
            console.log('Data has been inserted in the user details table');
        }
    } catch (error) {
        console.error('Error occur in the post request' , error);
    }
})

module.exports = router;