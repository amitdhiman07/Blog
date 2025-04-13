// Importing dependencies
const express = require('express');
const sequelize = require('../config/dbConnection');
const { UserMaster } = require('../models/userMaster');

const router = express.Router();


// Post Method
router.post('/post' , async (req , res) => {
    try {
        const {username , password } = req.body;
        if(username && password){
            const resultData = await UserMaster.create({username , password});
            res.json(resultData);
            console.log('Data has been inserted in the user Master table');
        }  
    } catch (error) {
        console.error('Error occur in the post request' , error);
    }
})

module.exports = router;