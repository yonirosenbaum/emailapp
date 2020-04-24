const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
  googleID: String
});

//Creates a collection called 'users' if it doesnt exist with this schema
// Two arguments in mongoose.model means you are creating a collection.
// One argument means your fetching a collection.
mongoose.model('users', userSchema);

