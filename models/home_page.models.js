const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserInfo = new Schema ({
    name: { type: String, required: true },
    interest: { type: String, required: true },
});

module.exports = mongoose.model('UserInfo', UserInfo)
