const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
  name: String,
  posts: {
    type: Array
  },
  tests: {
    type: Array
  }
});

module.exports = Class = mongoose.model('Class', ClassSchema);
