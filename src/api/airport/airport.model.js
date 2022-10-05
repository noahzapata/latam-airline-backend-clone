const { Schema, model } = require('mongoose');

const airportSchema = new Schema(
  {
    terminal: {
      type: Number,
      required: [true, 'This field is required'],
    },
    gate: {
      type: String,
      required: [true, 'This field is requried'],
    },
    name: {
      type: String,
      required: [true, 'This field is required'],
    },
    cityCode: String,
    city: {
      type: String,
      required: [true, 'This field is requried'],
    },
    country: {
      type: String,
      required: [true, 'This field is required'],
    },
    flight: {
      type: [{ type: Schema.Types.ObjectId, ref: 'Flight' }],
      required: false,
    },
  },
  { timestamps: true, versionKey: false }
);

const Airport = model('Airport', airportSchema);

module.exports = Airport;
