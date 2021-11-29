const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    message: String
});

module.exports = mongoose.model('Feedback', feedbackSchema);