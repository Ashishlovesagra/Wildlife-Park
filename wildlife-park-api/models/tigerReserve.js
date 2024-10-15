const mongoose = require("mongoose");

const tigerReserveSchema = new mongoose.Schema({
  reserveName: { type: String, required: true, trim: true },
  photo: { type: String, required: true },
  shortOverview: { type: [String], required: true },
  location: { type: String, required: true },
  nearestRailwayStation: {
    name: { type: String, required: true },
    distanceInKm: { type: Number, min: [0, "Distance cannot be negative"] },
  },
  nearestAirport: {
    name: { type: String, required: true },
    distanceInKm: { type: Number, min: [0, "Distance cannot be negative"] },
  },
  averageSafariCost: { type: String, required: true },
  safariMode: { type: [String], required: true },
  safariSeason: { type: String, required: true, default: "Morning, Evening" },
  animals: { type: [String], required: true },
  closedMonth: { type: [String], required: true },
  coreZone: [
    {
      zoneName: { type: String, required: true },
      entryGate: { type: String, required: true },
    },
  ],
  bufferZone: [
    {
      zoneName: { type: String, required: true },
      entryGate: { type: String, required: true },
    },
  ],
  aboutPark: { type: [String], required: true, maxlength: 2000 },
  flora: { type: [String], required: true },
  fauna: { type: [String], required: true },
  howToReach: {
    byAir: {
      nearestAirport: {
        name: String,
        distanceInKm: { type: Number, min: [0, "Distance cannot be negative"] },
      },
      alternativeAirports: [
        {
          name: String,
          distanceInKm: {
            type: Number,
            min: [0, "Distance cannot be negative"],
          },
        },
      ],
      transportFromAirport: { type: String, maxlength: 500 },
    },
    byTrain: {
      nearestStation: {
        name: String,
        distanceInKm: { type: Number, min: [0, "Distance cannot be negative"] },
      },
      transportFromStation: { type: String, maxlength: 500 },
    },
    byRoad: [
      {
        from: { type: String, required: true, trim: true },
        distanceInKm: {
          type: Number,
          required: true,
          min: [0, "Distance cannot be negative"],
        },
        transportOptions: { type: String, required: true, maxlength: 500 },
        travelTimeInHours: {
          type: Number,
          required: true,
          min: [0, "Travel time cannot be negative"],
        },
      },
    ],
    additionalInfo: { type: String, maxlength: 2000 },
  },
  mapLocation: { type: String, required: true },
  officialWebsite: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("TigerReserve", tigerReserveSchema);
