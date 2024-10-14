const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// Register new user
exports.registerUser = async (req, res) => {
  const { username, email, password, phone, answer } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({
      username,
      email,
      password,
      phone,
      answer,
    });

    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// User login
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.status(200).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Forgot password
exports.forgotPassword = async (req, res) => {
  const { email, answer } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user && user.answer === answer) {
      res.status(200).json({ message: 'Security answer verified' });
    } else {
      res.status(400).json({ message: 'Invalid answer' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};