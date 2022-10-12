const { Schema, model } = require('mongoose');

const airportSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'This field is required'],
    },
    city: {
      type: String,
      required: [true, 'This field is requried'],
    },
    cityCode: String,
    gate: {
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
