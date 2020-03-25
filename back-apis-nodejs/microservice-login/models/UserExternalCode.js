const mongoose = require('mongoose');

const userUserExternalCodeSchema = new mongoose.Schema(
    {
        firstCode: {
            type: Number
        },
        lastCode: {
            type: Number
        }
    },
    {
        collection: 'userExternalCodes'
    }
);

module.exports = mongoose.model('UserExternalCode', userUserExternalCodeSchema);