const { Schema, model } = require('mongoose');

const flightSchema = new Schema(
  {
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
    price: {
      light: Number,
      basic: Number,
      plus: Number,
    },
    departure: {
      airport: String,
      airplane: String,
      gate: String,
      delay: Number,
      schedule: Date,
      estimatedTime: Date,
    },
    arrival: {
      airport: String,
      airplane: String,
      gate: String,
      delay: Number,
      schedule: Date,
      estimatedTime: Date,
    },
  },
  { timestamps: true }
);

const Flight = model('Flight', flightSchema);

module.exports = Flight;
