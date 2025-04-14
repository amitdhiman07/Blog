// Import
const {UserMasterTableCreation} = require('../models/userMaster');
const {UserDetailsTableCreation} = require('../models/userDetails');
const {BlogPostTableCreation} = require('../models/blogPost');


async function TableSetup() {
    try {
        await UserMasterTableCreation();
        console.log('Created the User Master table ');
        
        await UserDetailsTableCreation();
        console.log('Created the User Details table ');

        await BlogPostTableCreation();
        console.log('Created the Blog Post table ');
        
    } catch (error) {
        console.error('Failed to load the Table structure', error);
    }
}

module.exports = {TableSetup};