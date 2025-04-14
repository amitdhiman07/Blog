// Import
const {UserMasterTableCreation} = require('../models/userMaster');
const {UserDetailsTableCreation} = require('../models/userDetails');


async function TableSetup() {
    try {
        await UserMasterTableCreation();
        console.log('Created the User Master table ');
        await UserDetailsTableCreation();
        console.log('Created the User Details table ');
    } catch (error) {
        console.error('Failed to load the Table structure', error);
    }
}

module.exports = {TableSetup};