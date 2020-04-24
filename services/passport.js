const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
// Note you dont require('./models/user') as you may get errors with mongoose
// model classes in test environment so import 'User' class through mongoose.
// ONE ARGUMENT IN mongoose.model MEANS YOU ARE FETCHING A CLASS
const User = mongoose.model('users');

// the user in the done() inside the if and else conditionals inside the passport.use() below
// is automatically passed as an argument to passport.serializeUser()
// user.id is grabbed from mongoDB
passport.serializeUser((user, done)=>{
    done(null, user.id);
});
passport.deserializeUser((id, done)=>{
    User.findById(id).then(
      user => {done(null, user)})
});
// Show passport that a new strategy is available and creates a new instance of the strategy
passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: 'http://localhost:5000/auth/google/callback',
        proxy: true
      },
      (accessToken, refreshToken, profile, done) => {
        console.log('profile:', profile)
        User.findOne({googleID: profile.id})
          .then((existingUser)=>{
              if (existingUser){
                 // user already exists

                 //done stops the ouath response from hanging and allows you to continue from oauth to next webpage
                 //done first argument is an error object and second is the identifying piece of info (ie user record)
                 done(null, existingUser)
              } else {
                 // user doesnt exist so add it to teh database
                 const newUser = new User({googleID: profile.id})
                 newUser.save().then(
                       user => done(null, user))
              } 
          })
        // creates a new instance of a user (a record)
    }
    )
 );