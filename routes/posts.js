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
 * POST
 */
router.post('/', PostsController.create);

/*
* GET 'new post' form
*/
router.get('/new', PostsController.form);

/*
* GET ONE
*/
router.get('/:id', PostsController.show);

/*
* EDIT
*/
router.get('/:id/edit', PostsController.edit);

/*
* UPDATE
*/
router.put('/:id', PostsController.update);

/*
* DELETE
*/
router.delete('/:id', PostsController.remove);

module.exports = router

