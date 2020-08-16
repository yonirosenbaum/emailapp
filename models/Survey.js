const mongoose = require('mongoose');
const {Schema} = mongoose;
const RecipientSchema = require('./Recipient')

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [RecipientSchema],
    yes: {type: Number, default: 0},
    no: {type: Number, default: 0},
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    dateSent: Date,
    lastResponded: Date
});
// [String] means an array containing a list of strings
// _user field is a relationship field that is designed to set a relationship
// between 2 fields ie the survey field and user field.
// the _ before user is not necessary for a relationship field but indicates
// that it is a relationship field.

mongoose.model('surveys', surveySchema);

















