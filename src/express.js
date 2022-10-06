const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

function expressConfig(app) {
  app.use(express.json());
  app.use(express.static('static'));
  app.use(cors());
  app.use(morgan('dev'));
}

module.exports = expressConfig;
