const express = require('express');
const { createReserve, getAllReserves, getReserveById, updateReserve, deleteReserve } = require('../controllers/reserveController');
const upload = require('../middlewares/upload');
const protect = require('../middlewares/auth');

const router = express.Router();

router.route('/')
  .post(protect, upload.single('photo'), createReserve) // Protected route for creation
  .get(getAllReserves);

router.route('/:id')
  .get(getReserveById)
  .put(protect, updateReserve) // Protected route for updating
  .delete(protect, deleteReserve); // Protected route for deletion

module.exports = router;