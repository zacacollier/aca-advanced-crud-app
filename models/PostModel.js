const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postModel = new Schema({
  'author': String,
  'title': String,
  'date': String,
  'body': String
})

module.exports = mongoose.model('post', postModel);
