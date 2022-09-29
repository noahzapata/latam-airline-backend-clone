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
      delay: Number,
      schedule: Date,
      estimatedTime: Date,
    },
    arrival: {
      airport: String,
      delay: Number,
      schedule: Date,
      estimatedTime: Date,
    },
    seats: {
      type: Object,
      required: true,
    },
    airplane: {
      type: Schema.Types.ObjectId,
      ref: 'Airplane',
      required: false,
    },
  },
  { timestamps: true }
);

const Flight = model('Flight', flightSchema);

module.exports = Flight;
