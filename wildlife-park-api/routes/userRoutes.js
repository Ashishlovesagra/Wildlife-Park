// routes/userRoutes.js
const express = require('express');
const {
  register,
  login,
  forgotPassword,
  resetPassword,
  getAllUsers,
  logout,
} = require('../controllers/userController');
const { isAdmin, protect } = require('../middlewares/auth');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.get('/all-users',protect, isAdmin, getAllUsers);
router.post('/logout',protect, logout); // Typically handled on the client side

module.exports = router;
