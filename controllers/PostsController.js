const PostModel = require('../models/PostModel')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

let PostsController = {

  list: function(req, res, next) {
    PostModel.find().exec()
    .then(posts => res.render('posts', { posts }))
    .catch(err => next(err))
  },

  show: function(req, res, next) {
    PostModel.findById(req.params.id).exec()
    .then(post => res.render('post', { post }))
    .catch(err => next(err))
  },

  form: function(req, res, next) {
    res.render('post_form', {title: 'New Post'}).exec()
    .catch(err => next(err))
  },

  create: function(req, res, next) {
    let post = new PostModel({
      _id: req.body.id,
      author: req.body.author,
      title: req.body.title,
      date: req.body.date,
      body: req.body.body
    })
    post.save()
    // .then(posts => res.render('posts', { posts }))
    .then(res.redirect('/posts'))
    .catch(err => next(err))
  },

  edit: function(req, res, next) {
    PostModel.findById({ _id: req.params.id }).exec()
    .then(post => res.render('post_edit_form', { post }))
    // {title: `Edit ${this._id}`}
    .catch(err => next(err))
  },

  update: function(req, res, next) {
    PostModel.findByIdAndUpdate(req.params.id, {
      author: req.body.author,
      title: req.body.title,
      date: req.body.date,
      body: req.body.body
    }, { new: true, runValidators: true  }).exec()
    .then(res.redirect('/posts'))
    .catch(err => next(err))
  },

  remove: function(req, res, next) {
    PostModel.findByIdAndRemove({_id: req.params.id}).exec()
    .then(res.redirect('/posts'))
    .catch(err => next(err))
  }

};

module.exports = PostsController
