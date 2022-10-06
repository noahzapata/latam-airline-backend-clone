require('dotenv').config();
const express = require('express');
const connectDB = require('./database');
const routesConfig = require('./routes.config');
const expressConfig = require('./express');
const { transporter, verify } = require('./utils/mailer');

const app = express();

const PORT = process.env.PORT || 8080;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.listen(PORT, () => {
  expressConfig(app);
  connectDB();
  routesConfig(app);
  verify(transporter);
  console.log(
    `The server is running on port: http://localhost:${PORT} in ${NODE_ENV} mode`
  );
});
