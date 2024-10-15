const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const tigerReserveRoutes = require('./routes/tigerReserveRoutes');
const bodyParser = require('body-parser');

dotenv.config();
connectDB();

const app = express();

// Enable CORS
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS || '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(bodyParser.json());

// API routes
app.use('/api/users', userRoutes);
app.use('/api/tigerReserves', tigerReserveRoutes);

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

module.exports = app;