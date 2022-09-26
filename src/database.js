const mongoose = require('mongoose');

function connectDB() {
  const mongoURI = process.env.MONGODB_URI;
  try {
    mongoose.connect(mongoURI);
    console.log('Connected with mongoDB');
  } catch (err) {
    console.error('Error in the conection with MongoDB');
    process.exit(1);
  }
}

module.exports = connectDB;
