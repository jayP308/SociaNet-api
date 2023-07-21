const express = require('express');
const router = express.Router();

const {
  getAllThoughts,
  getThoughtsById,
  createThought,
  deleteThought,
  updateThoughtById,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

// GET and POST all thoughts
router.get('/', getAllThoughts);
router.post('/', createThought);

// GET thought by id, PUT update thought by id, and DELETE thought by id
router.get('/:thoughtId', getThoughtsById);
router.put('/:thoughtId', updateThoughtById);
router.delete('/:thoughtId', deleteThought);

// POST create reaction for a thought
router.post('/:thoughtId/reactions', createReaction);

// DELETE reaction by id for a specific thought
router.delete('/:thoughtId/reactions/:reactionId', deleteReaction);

// Export the router
module.exports = router;
