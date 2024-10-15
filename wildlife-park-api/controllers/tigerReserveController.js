const TigerReserve = require("../models/tigerReserve");

// Get all tiger reserves
exports.getAllReserves = async (req, res) => {
  try {
    const reserves = await TigerReserve.find();
    res.status(200).json(reserves);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new tiger reserve
exports.createReserve = async (req, res) => {
  try {
    const newReserve = new TigerReserve(req.body);
    const reserve = await newReserve.save();
    res.status(201).json(reserve);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single reserve by ID
exports.getReserveById = async (req, res) => {
  try {
    const reserve = await TigerReserve.findById(req.params.id);
    if (!reserve) return res.status(404).json({ message: "Reserve not found" });
    res.status(200).json(reserve);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a reserve
exports.updateReserve = async (req, res) => {
  try {
    const updatedReserve = await TigerReserve.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedReserve)
      return res.status(404).json({ message: "Reserve not found" });
    res.status(200).json(updatedReserve);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a reserve
exports.deleteReserve = async (req, res) => {
  try {
    const reserve = await TigerReserve.findByIdAndDelete(req.params.id);
    if (!reserve) return res.status(404).json({ message: "Reserve not found" });
    res.status(200).json({ message: "Reserve deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
