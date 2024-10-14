const Reserve = require('../models/reserveModel');

// Create a new reserve
exports.createReserve = async (req, res) => {
  try {
    const reserve = new Reserve({
      ...req.body,
      photo: req.file.path, // image path from multer
    });
    const savedReserve = await reserve.save();
    res.status(201).json(savedReserve);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all reserves
exports.getAllReserves = async (req, res) => {
  try {
    const reserves = await Reserve.find();
    res.status(200).json(reserves);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific reserve by ID
exports.getReserveById = async (req, res) => {
  try {
    const reserve = await Reserve.findById(req.params.id);
    if (!reserve) return res.status(404).json({ message: 'Reserve not found' });
    res.status(200).json(reserve);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a reserve
exports.updateReserve = async (req, res) => {
  try {
    const reserve = await Reserve.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!reserve) return res.status(404).json({ message: 'Reserve not found' });
    res.status(200).json(reserve);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a reserve
exports.deleteReserve = async (req, res) => {
  try {
    const reserve = await Reserve.findByIdAndDelete(req.params.id);
    if (!reserve) return res.status(404).json({ message: 'Reserve not found' });
    res.status(200).json({ message: 'Reserve deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};