const { Schema, model } = require('mongoose');

const airplaneSchema = new Schema(
  {
    plate: {
      type: String,
      required: true,
    },
    planeModel: {
      type: String,
      required: true,
    },
    flights: {
      type: Schema.Types.ObjectId,
      ref: 'Flight',
      required: false,
    },
  },
  { timestamps: true, versionKey: false }
);

const Airplane = model('Airplane', airplaneSchema);

module.exports = Airplane;
