const express = require('express');
const app = express();

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
app.listen(PORT);