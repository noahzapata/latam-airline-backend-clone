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

const getFlights = (departureCity, arrivalCity, dates) => {
  return Flight.find({ departureCity, arrivalCity, dates });
};

const getFlightsById = (id) => {
  return Flight.findById(id);
};

const updateFlight = (id, flight) => {
  return Flight.findByIdAndUpdate(id, flight, { new: true });
};

module.exports = { createFlight, getFlights, getFlightsById, updateFlight };
