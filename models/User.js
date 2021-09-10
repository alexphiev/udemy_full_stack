const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
   googleId: String
   // Easy to add more fields later without messing up the DB
});

// 'users' is the collection name
mongoose.model('users', userSchema);