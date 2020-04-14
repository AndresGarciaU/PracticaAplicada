const mongoose = require('mongoose');

const userLoginSchema = new mongoose.Schema(
    {
        user: {
            type: String,
            required: true
        },
        code: {
            type: String,
            required: true
        }
    },
    {
        collection: 'usersLogin'
    }
);

module.exports = mongoose.model('UserLogin', userLoginSchema);