const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authorSchema = new Schema({
  author: {
    type: String,
    required: true,
    trim: true,
  }
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;