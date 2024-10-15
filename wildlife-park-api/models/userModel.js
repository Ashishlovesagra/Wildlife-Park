// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  answer: { type: String, required: true },
  resetToken: { type: String },
  resetTokenExpiration: { type: Date },
});

module.exports = mongoose.model('User', userSchema);
