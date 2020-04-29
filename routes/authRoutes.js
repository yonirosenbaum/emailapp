const passport = require('passport');

// This below connects a specfic address when visited from
// the client connects to passport and therefore google.
// when you go to this address use the 'google' strategy
// when I called new GoogleStrategy on passport.use() in './services/passports.js'
 // I can automatically identify it with passport.authenticate as 'google'.
//  This is due to inbuilt code in how new GoogleStrategy automatically works.
// scope is what I want from google.
module.exports = (app) => {
   app.get('/auth/google', 
     passport.authenticate('google', {
      scope: ['profile', 'email']
   })
);
// this is the same address as the callbackurl in passport.use()
// passport.authenticate is a middleware so you need
// another following route handler so it knows what to do.
app.get('/auth/google/callback',
   passport.authenticate('google'),
   (req, res) => {res.redirect('/surveys')} 
);

app.get('/api/logout', 
   (req, res) => {
      // .logout() is a passport function and just removes the cookie
      req.logout()
      res.redirect('/')
   });

app.get('/api/current_user', (req, res) => {
   res.send(req.user);
 })

};