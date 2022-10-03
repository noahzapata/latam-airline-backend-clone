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
  },
  { timestamps: true }
);

const Airport = model('Airport', airportSchema);

module.exports = Airport;
