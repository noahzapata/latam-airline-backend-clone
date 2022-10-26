const { Schema, model, models } = require('mongoose');

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, 'The field is required'],
    },
    lastName: {
      type: String,
      required: [true, 'The field is required'],
    },
    birthdate: Date,
    gender: {
      type: String,
      required: true,
      emun: {
        values: ['Female', 'Male', 'ND'], //ND stands for No Data
        message: 'Invalid gender input',
      },
    },
    profilePhoto: String,
    country: {
      type: String,
      required: true,
    },
    documentType: {
      type: String,
      required: true,
      emun: {
        values: ['Pasaporte', 'Cédula de ciudadanía'],
        message: 'Invalid document type',
      },
    },
    documentNumber: {
      type: String,
      required: true,
      minLength: [8, 'Number document is too short'],
      maxLength: [18, 'Number is too large'],
      validate: [
        {
          async validator(value) {
            try {
              const user = await models.User.findOne({ documentNumber: value });
              return !user;
            } catch {
              return false;
            }
          },
          message: 'It is already exist a user with this document number',
        },
      ],
    },
    email: {
      type: String,
      required: true,
      validate: [
        {
          async validator(value) {
            try {
              const user = await models.User.findOne({ email: value });
              return !user;
            } catch {
              return false;
            }
          },
          message: 'It is already exist a user with this email',
        },
      ],
    },
    password: {
      type: String,
      minLength: [8, 'The password too short'],
      required: false,
    },
    isRegistered: {
      type: Boolean,
      required: false,
      default: false,
    },
    bookings: {
      type: [{ type: Schema.Types.ObjectId, ref: 'Booking' }],
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = model('User', userSchema);

module.exports = User;
