const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  avatar: String,
  email: {
    type: String,
    unique: true
  },
  role: Number
});
module.exports = User = mongoose.model('User', UserSchema);
