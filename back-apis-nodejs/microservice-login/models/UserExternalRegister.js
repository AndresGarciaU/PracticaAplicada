const mongoose = require('mongoose');

const userExternalSchema = new mongoose.Schema(
    {
        mail: {
            type: String,
            required: true
        },
        name1: {
            type: String,
            required: true
        },
        name2: {
            type: String
        },
        lastName1: {
            type: String,
            required: true
        },
        lastName2: {
            type: String,
            required: true
        },
        reason: {
            type: String,
            required: true
        },
        creationDate: {
            type: Date,
            required: true
        },
        user: {
            type: String,
            required: true
        },
        code: {
            type: String,
            required: true
        },
        typeUser: {
            type: String,
            required: true
        },
    },
    {
        collection: 'usersExternalRegister'
    }

);

module.exports = mongoose.model('UserExternalRegister', userExternalSchema);