const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const TaskModel = require('../models/PostModel')
const PostsController = require('../controllers/PostsController')

/*
* GET
*/
router.get('/', PostsController.list);

/*
* GET ONE
*/
router.get('/:id', PostsController.show);

/*
* POST
*/
router.post('/', PostsController.create);

/*
* UPDATE
*/
router.put('/:id', PostsController.update);

/*
* DELETE
*/
router.delete('/:id', PostsController.remove);

module.exports = router
