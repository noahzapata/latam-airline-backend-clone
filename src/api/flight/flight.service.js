const Flight = require('./flight.model');

const createFlight = async (
  flight,
  airplaneId,
  airportDeparture,
  airportArrival
) => {
  return await Flight.create({
    ...flight,
    departureAirport: airportDeparture,
    departureArrival: airportArrival,
    airplane: airplaneId,
  });
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
