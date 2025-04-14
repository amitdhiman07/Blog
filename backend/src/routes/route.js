// Importing dependencies
const express = require('express');
const sequelize = require('../config/dbConnection');

// importing for the validation on the fields by using express validator
const { body , validationResult} = require('express-validator');

// Importing table 
const { UserMaster } = require('../models/userMaster');
const { UserDetails } = require('../models/userDetails');
const { BlogPost } = require('../models/blogPost');

const router = express.Router();


// Post Method for the login
router.post('/login' , [
    body('username').notEmpty().withMessage('Invalid username or must not be empty'),
    body('password').notEmpty().isLength({min:6}).withMessage('must be at least 6 characters and not be empty')
] , async (req , res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }else{
            const { username , password } = req.body;
            if(username && password){
                const userMasterData = await UserMaster.create({username , password});
                return res.status(201).json(userMasterData);
                console.log('Inserted the data into user master table during login process');
            }else{
                return res.status(400).json({ message: 'Invalid username or password' });
            }
        }
    } catch (error) {
        console.error("Failed to insert the data into the user master table during login process ", error);
    }
});


// // Post Method
// router.post('/post', [
//     body('username').notEmpty().withMessage('Username must not be empty'),
//     body('email').isEmail().withMessage('Invalid email'),
//     body('password').isLength({ min: 8 }).withMessage(' Minimum length should be 8 '),
//     body('post').notEmpty() 
// ] ,async (req, res) => {
//     try {
//         // Passing username and password in the request body.
//         const error = validationResult(req);
//         if (!error.isEmpty()) {
//             return res.status(400).json({ error: error.array() });
//         }
//         else{
//             const { username, password, name, email, post } = req.body;

//             // For user master table.
//             if (username && password) {
//                 // inserting username and password in the UserMaster table.
//                 const resultData = await UserMaster.create({ username, password });
//                 res.json(resultData);
//                 console.log('Data has been inserted in the user Master table');
//             }
    
//             // For user details table.
//             if (name && email && password) {
//                 // inserting name , email and password in the userDetails table.
//                 const result = await UserDetails.create({ name, email, password });
//                 // res.json(result);
//                 res.status(201).json(result);
//                 console.log('Data has been inserted in the user details table');
//             }
    
    
//             // For blog post table.
//             if (post) {
//                 // inserting post in the blogPost table.
//                 const data = await BlogPost.create({ post });
//                 if (data) {
//                     res.status(201).json(data);
//                 }else{
//                     res.status(400).json({ message: 'Failed to create blog post' });
//                 }
//             }
//         }

//     } catch (error) {
//         console.error('Error occur in the post request', error);
//     }
// })

module.exports = router;