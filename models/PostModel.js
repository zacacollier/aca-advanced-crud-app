const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postModel = new Schema({
  'author': {type: String, required: true },
  'title': {type: String, required: true },
  'date': {type: String, required: true },
  'body': {type: String, required: true }
})

module.exports = mongoose.model('post', postModel);
