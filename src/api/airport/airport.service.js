const Airport = require('./airport.model');

const createAirport = async (airportData) => {
  return await Airport.create(airportData);
};

const allAirports = () => {
  return Airport.find({});
};

const findAirport = (id) => {
  return Airport.findById(id);
};

const updateAirport = (id, airportData) => {
  return Airport.findByIdAndUpdate(id, airportData, { new: true });
};

module.exports = { createAirport, findAirport, updateAirport, allAirports };
