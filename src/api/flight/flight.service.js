const Flight = require('./flight.model');

const createFlight = (flight, airplaneId) => {
  return Flight.create({ ...flight, airplane: airplaneId }).populate(
    'airplane'
  );
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
