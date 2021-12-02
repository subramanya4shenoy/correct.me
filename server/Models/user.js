const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userID: String,
    name: String,
    email: String,
    source: String,
    short_name: String,
    feedback_recieved: [String]
});

module.exports = mongoose.model('User', userSchema);

