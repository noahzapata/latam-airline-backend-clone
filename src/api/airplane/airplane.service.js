const Airplane = require('./airplane.model');

const createAirplane = (airplane) => {
  return Airplane.create(airplane);
};

const getAirplanes = () => {
  return Airplane.find({}).populate('flight');
};

module.exports = { createAirplane, getAirplanes };
