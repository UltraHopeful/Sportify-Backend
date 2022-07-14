const express = require('express');
const route = express.Router()
const blogController = require('../controllers/Blogging/allBlogs');

// blogs get apis
route.get('/api/blogs/allblogs', blogController.getAllBlogs);
route.get('/api/blogs/blog/:id', blogController.getBlog);
route.get('/api/blogs/yourblog/:userId', blogController.getYourBlogs);

// blogs post api.
route.post('/api/blogs/postBlog', blogController.postBlog);

module.exports = route;

