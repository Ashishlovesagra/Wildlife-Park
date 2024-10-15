const express = require("express");
const {
  getAllReserves,
  createReserve,
  getReserveById,
  updateReserve,
  deleteReserve,
} = require("../controllers/tigerReserveController");
const { isAdmin, protect } = require("../middlewares/auth");

const router = express.Router();

// Get All Reserves
router.get("/", protect, getAllReserves);

// Create Reserve (Admin only)
router.post("/", protect, isAdmin, createReserve);

// Get Reserve by ID
router.get("/:id", protect, getReserveById);

// Update Reserve (Admin only)
router.put("/:id", protect, isAdmin, updateReserve);

// Delete Reserve (Admin only)
router.delete("/:id", protect, isAdmin, deleteReserve);

module.exports = router;
