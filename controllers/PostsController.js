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
      .then(match => res.render('posts', { match }))
      .catch(err => next(err))
    },

    create: function(req, res, next) {
      let post = new PostModel({
        author: req.body.author,
        title: req.body.title,
        date: req.body.date,
        body: req.body.body
      })
      post.save()
      .then(posts => res.render('posts', { posts }))
      // .then(res.redirect('posts'))
      .catch(err => next(err))
    },

    update: function(req, res, next) {
      PostModel.findByIdAndUpdate({ _id: req.params.id }, {
        author: req.body.author || posts.author,
        title: req.body.title || posts.title,
        date: req.body.date || posts.date,
        body: req.body.body || posts.text
      }, { new: true }).exec()
      .then(posts => res.render(posts))
      .catch(err => next(err))
    },

    remove: function(req, res, next) {
      let id = req.params.id
      PostModel.findByIdAndRemove({_id: id}).exec()
      .then(posts => res.render(posts))
      .catch(err => next(err))
    }

};

module.exports = PostsController
