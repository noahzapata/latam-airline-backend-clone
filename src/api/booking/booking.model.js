const { Schema, model } = require('mongoose');

const bookingSchema = new Schema(
  {
    departure: {
      type: String,
      required: [true, 'The field is required'],
    },
    arrival: {
      type: String,
      required: [true, 'The field is required'],
    },
    luggage: [{}],
    reservedSeats: [{}],
    checkIn: [],
    roundtrip: {
      type: Boolean,
      required: false,
    },
    adults: {
      type: Number,
      required: [true, 'Must to travel at leat one adult'],
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
    tripGoFlight: {
      type: Schema.Types.ObjectId,
      ref: 'Flight',
      required: false,
    },
    tripGoBackFlight: {
      type: Schema.Types.ObjectId,
      ref: 'Flight',
      required: false,
    },
  },
  { timestamps: true, versionKey: false }
);

const Booking = model('Booking', bookingSchema);
module.exports = Booking;
