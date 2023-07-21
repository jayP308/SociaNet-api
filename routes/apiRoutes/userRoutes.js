const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  addFriend,
  removeFriend,
  // checkFriendRemoved,
} = require('../../controllers/userController');

// GET and POST all users
router.get('/', getAllUsers);
router.post('/', createUser);

// GET user id, PUT update user id and DELETE user by id
router.get('/:userId', getUserById);
router.put('/:userId', updateUserById);
router.delete('/:userId', deleteUserById);

// POST add friend and DELETE remove Friend
router.post('/:userId/friends/:friendId', addFriend);
router.delete('/:userId/friends/:friendId', removeFriend);

// Export the router
module.exports = router;