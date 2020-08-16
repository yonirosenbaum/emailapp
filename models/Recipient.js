const mongoose = require('mongoose');
const {Schema} = mongoose;

const recipientSchema = new Schema({
    email: String,
    responded: {type: Boolean, default: false}
});

module.exports = recipientSchema;

// this is a subdocument within each survey so creating a class isn't right
// This is imported into './models/survey.js'