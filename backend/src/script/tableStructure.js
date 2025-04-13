// Import
const {UserMasterTableCreation} = require('../models/userMaster');


async function TableSetup() {
    try {
        await UserMasterTableCreation();
        console.log('Created the User Master table ');
    } catch (error) {
        console.error('Failed to load the Table structure', error);
    }
}

module.exports = {TableSetup};