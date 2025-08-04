const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Get all posts
 *     responses:
 *       200:
 *         description: Returns a list of posts
 */
router.get('/posts', postController.getAllPosts);

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a new post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 example: "This is a new post"
 *     responses:
 *       200:
 *         description: Post created successfully
 */
router.post('/posts', postController.addPost);

/**
 * @swagger
 * /posts/{id}/like:
 *   post:
 *     summary: Like a post
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Post liked successfully
 */
router.post('/posts/:id/like', postController.likePost);

/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Delete a post
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Post deleted successfully
 */
router.delete('/posts/:id', postController.deletePost);

/**
 * @swagger
 * /posts/{id}/comments:
 *   post:
 *     summary: Add a comment to a post
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 example: "Nice post!"
 *     responses:
 *       200:
 *         description: Comment added successfully
 */
router.post('/posts/:id/comments', postController.addComment);

module.exports = router;
