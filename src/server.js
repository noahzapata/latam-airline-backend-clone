require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const { connect } = require('./db');

const app = express();
const port = 8080;
connect();

app.listen(port, () => {
  console.log(`Server ok http://localhost:${port}`);
});
