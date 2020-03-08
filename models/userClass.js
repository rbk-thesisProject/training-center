const mongoose = require('mongoose');

const UserClassSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'class'
  }
});

module.exports = UserClass = mongoose.model('UserClass', UserClassSchema);
