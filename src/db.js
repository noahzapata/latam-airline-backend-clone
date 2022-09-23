const mongoose = require('mongoose');

function connect() {
  const mongoUri = process.env.MONGO_URI;

  mongoose.connect(mongoUri);

  mongoose.connection.once('open', () => {
    console.log('Connection with mongo OK');
  });

  mongoose.connection.on('error', (err) => {
    console.log('something went wrong!', err);
  });

  return mongoose.connection;
}

module.exports = { connect };
