// blogs
import express from 'express';
import {
	getPosts,
	createPost,
	getPost,
	updatePost,
	deletePost,
} from '../controllers/blogsController.js';

const router = express.Router();

// GET /api/blog/posts
router.get('/posts', getPosts);

// POST /api/blog/posts
router.post('/posts', createPost);

// GET /api/blog/posts/:id
router.get('/posts/:id', getPost);

// PUT /api/blog/posts/:id
router.put('/posts/:id', updatePost);

// DELETE /api/blog/posts/:id
router.delete('/posts/:id', deletePost);
export default router