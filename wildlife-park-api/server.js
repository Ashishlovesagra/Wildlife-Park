const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
require('dotenv').config();

// Initialize the app
const app = express();
connectDB();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(cookieParser());

// Rate limiter to prevent DDoS attacks
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Static folder for uploads
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/reserves', require('./routes/reserveRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});