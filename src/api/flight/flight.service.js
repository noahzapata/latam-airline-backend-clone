const Flight = require('./flight.model');

const createFlight = (flight) => {
  return Flight.create(flight);
};

const getFlights = () => {
  return Flight.find({});
};

const getFlightsById = (id) => {
  return Flight.findById(id);
};

const updateFlight = (id, flight) => {
  return Flight.findByIdAndUpdate(id, flight, { new: true });
};

module.exports = { createFlight, getFlights, getFlightsById, updateFlight };
