// Dependencies 
const {sequelize} = require('../config/dbConnection');
const { DataTypes } = require('sequelize');


// create Blog post table
const BlogPost = sequelize.define('blogPost' , {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    post:{
        type: DataTypes.TEXT,
        allowNull: false,
    }
},
{
    schema:'blog',
    tableName: 'blogpost',
});

async function BlogPostTableCreation() {
    try {
        await BlogPost.sync({alter:true});
        console.log('Blog Post Table Created');
    } catch (error) {
        console.error('Failed to create the blog post table');
    }
}

module.exports = {BlogPostTableCreation , BlogPost};