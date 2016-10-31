const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// Require Routes
const posts = require('./routes/posts');

// Set up database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/crud-blog')

// Create our instance of our app
const app = express();

// Set up methodOverride to handle our PUT and DELETE request
app.use(methodOverride('_method'));

// Add middleware
app.use(bodyParser.urlencoded({ extended: false }));
// TODO: Add a comment here explaining, briefly, what bodyParser is doing to our request

// Set our views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set our directory for serving static files
app.use(express.static('resources'));

// Registering a simple route to redirect to '/posts'
app.get('*', (req, res, next) => {
  res.redirect('/posts');
});

// Register our routes
// TODO: Register our `posts` routes name-spaced under '/posts'

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
