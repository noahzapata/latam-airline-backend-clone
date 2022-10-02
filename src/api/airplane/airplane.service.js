const Airplane = require('./airplane.model');

const createAirplane = (airplane) => {
  return Airplane.create(airplane);
};

const getAirplanes = () => {
  return Airplane.find({});
};

const updateAirplanes = (id, airplane) => {
  return Airplane.findByIdAndUpdate(id, airplane, { new: true });
};

module.exports = { createAirplane, getAirplanes, updateAirplanes };
