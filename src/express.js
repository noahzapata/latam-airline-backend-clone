const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

function expressConfig(app) {
  app.use(express.json());
  app.use(cors());
  app.use(morgan('tiny'));
}

module.exports = expressConfig;
