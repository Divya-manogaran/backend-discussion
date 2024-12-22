const express = require('express');
const router = express.Router();
const {
    getAllDiscussions,
    createDiscussion,
    likeDiscussion,
    dislikeDiscussion,
    addReply,
} = require('../controllers/discussionController'); // Import specific functions from the controller

// Define routes and associate them with controller functions
router.get('/', getAllDiscussions); // Get all discussions
router.post('/', createDiscussion); // Create a new discussion
router.patch('/:id/like', likeDiscussion); // Like a discussion
router.patch('/:id/dislike', dislikeDiscussion); // Dislike a discussion
router.post('/:id/reply', addReply); // Add a reply to a discussion

module.exports = router;
