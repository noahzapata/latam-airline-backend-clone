const { Schema, model } = require('mongoose');

const bookingSchema = new Schema(
  {
    origin: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    luggage: {
      kilograms: {
        type: Number,
        emun: [15, 23],
        default: 15,
      },
      amount: {
        type: Number,
        default: 1,
      },
    },
    passengers: {
      type: Number,
      required: true,
    },
    adults: {
      type: Number,
      required: false,
      default: 1,
    },
    kids: {
      type: Number,
      required: false,
      default: 0,
    },
    babies: {
      type: Number,
      required: false,
      default: 0,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

const Booking = model('Booking', bookingSchema);
module.exports = Booking;
