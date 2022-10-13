const { Schema, model } = require('mongoose');

const flightSchema = new Schema(
  {
    status: {
      type: Boolean,
      default: true,
    },
    price: Number,
    seats: {},
    departureAirport: {
      type: Schema.Types.ObjectId,
      ref: 'Airport',
      required: true,
    },
    departureArrival: {
      type: Schema.Types.ObjectId,
      ref: 'Airport',
      required: false,
    },
    date: Date,
    airplane: {
      type: Schema.Types.ObjectId,
      ref: 'Airplane',
      required: true,
    },
    bookings: {
      type: [{ type: Schema.Types.ObjectId, ref: 'Booking' }],
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const Flight = model('Flight', flightSchema);

module.exports = Flight;
