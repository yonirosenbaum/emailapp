const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const Survey = mongoose.model('survey');

module.exports = (app) => {
    app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
        const {title, subject, body, recipients} = req.body;
        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email=> ({email: email.trim()})),
            _user: req.user.id,
            dateSent: Date.now()
        })
    })
};
// req.body.recipients will be a long String eg. "email1@gmail.com, email2@gmail.com, email3@gmail.com",
// so we split it into a array with a series of strings with .split(',')
// we then .map over it and assign the email address as the value to an object
// with the key 'email'.

// the _user id property is te id automatically provided to mongoose