const { Schema, model, models } = require('mongoose');

const airplaneSchema = new Schema(
  {
    plate: {
      type: String,
      required: true,
      validate: [
        {
          async validator(value) {
            try {
              const plane = await models.Airplane.findOne({ plate: value });
              return !plane;
            } catch {
              return false;
            }
          },
          message: 'It is already exist a airplane with this plate code',
        },
      ],
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
