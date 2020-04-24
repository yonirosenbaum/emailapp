const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User');
require('./services/passport'); // we can do this since we are not returning anything in the file so we dont need to assign a variable.
const keys = require('./config/keys');
const app = express();

//Connect mongoose to mongoDB
mongoose.connect(keys.mongoURI);

// Tell express to use cookies in the application
  // max age is in milliseconds ie 30 days.
  // keys needs to be entered as an array however you only need to add one string to the array.
  // cookie-sessionsassigns a cookie to the req.session property
app.use(
   cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey]
   })
);
//Tells passport to use cookies
app.use(passport.initialize());
// Allows passport to parse the cookie to req.session- allows req.session to contain passport.userid
app.use(passport.session());


//Routing
require('./routes/authRoutes')(app);

app.get('/', (req, res) => {
    res.send({bye: 'buddy'});
});

{/*             Heroku Set Up
    1. Because the port given by heroku will be provided just 
       before the app is run however this port changes/ can change.
    2. Create "engines" in package.json to specify node and npm
       version for heroku to use.
    3. Create start script in package.json to say 
       "start": "node index.js" so hiroku knows what to read.
    4. Create .gitignore and add node_modules.
    5. Need to commit to git as heroku uses this.
    6. Install heroku-cli using 'https://devcenter.heroku.com/articles/heroku-cli'
    7. For additional diagrams go to './yoni/jsxprojects/guides/hiroku'
    8. Look at video 15 of the app to kow how to do all the command line
       setup.
*/}

{/*             package.json
// you need to do the below command "engines" to specify which npm
  // and node versions to use on hiroku.

// values in the udemy
//"node": "8.1.1",
//"npm": "5.0.3"
// https://hidden-beyond-37232.herokuapp.com/ | https://git.heroku.com/hidden-beyond-37232.git
*/}
const PORT = process.env.PORT || 5000;
// an answer in udemy said to provide the second argument '0.0.0.0' with heroku
app.listen(PORT, console.log(`server starting on port: ${PORT}`));