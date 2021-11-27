const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userID: String,
    name: String,
    source: String
});

module.exports = mongoose.model('User', userSchema);

