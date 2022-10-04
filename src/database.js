const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI;
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected with mongoDB');
  } catch (err) {
    console.error('Error in the conection with MongoDB');
    process.exit(1);
  }
};

module.exports = connectDB;
