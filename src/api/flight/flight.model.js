const { Schema, model } = require('mongoose');

const flightSchema = new Schema(
  {
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
    price: {
      light: String,
      basic: String,
      plus: String,
    },
    departure: {
      airport: {
        type: Schema.Types.ObjectId,
        ref: 'Airport',
        required: false,
      },
      seats: {
        departureUser: {
          type: Array,
          required: true,
        },
      },
      delay: Number,
      schedule: Date,
      estimatedTime: Date,
    },
    arrival: {
      airport: {
        type: Schema.Types.ObjectId,
        ref: 'Airport',
        required: false,
      },
      seats: {
        arrivalUser: {
          type: Array,
          required: false,
        },
      },
      delay: Number,
      schedule: Date,
      estimatedTime: Date,
    },
    airplane: {
      type: Schema.Types.ObjectId,
      ref: 'Airplane',
      required: true,
    },
    booking: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: false,
    },
  },
  { timestamps: true }
);

const Flight = model('Flight', flightSchema);

module.exports = Flight;
