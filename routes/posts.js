const express = require("express");
const router = express.Router();
const PostController = require("../controllers/posts");

// Create a new post
router.post('/', PostController.CreatePost);

// Delete a post by ID
router.delete('/:id', PostController.DeletePostById);

// Update a post by ID
router.put('/:id', PostController.UpdatePost);

// Get a post by ID
router.get('/:id', PostController.GetPostById);

// Get posts by user ID
router.get('/user/:userId', PostController.GetPostByUserId);

module.exports = router;
