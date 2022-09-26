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
      type: Number,
      required: false,
    },
    passengers: {
      type: Number,
      required: true,
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
