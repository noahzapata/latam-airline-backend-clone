require('dotenv').config();
const express = require('express');
const connectDB = require('./dataBase');
const routesConfig = require('./routes.config');
const expressConfig = require('./express');

const app = express();

const PORT = 8080;

app.listen(PORT, async () => {
  expressConfig(app);
  await connectDB();
  routesConfig(app);
  console.log(`The server is runnign on port: ${PORT}`);
});
