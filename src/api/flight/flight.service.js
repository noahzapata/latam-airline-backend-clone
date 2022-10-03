const Flight = require('./flight.model');

const createFlight = async (
  flight,
  airplaneId,
  airportDeparture,
  airportArrival
) => {
  return await Flight.create({
    ...flight,
    airplane: airplaneId,
    departure: {
      ...flight.departure,
      airport: airportDeparture,
    },
    arrival: {
      ...flight.arrival,
      airport: airportArrival,
    },
  });
};

const getFlights = () => {
  return Flight.find({}).populate({
    path: 'airplane',
    select: 'plate airBus -_id planeModel',
  });
};

const getFlightsById = (id) => {
  return Flight.findById(id);
};

const updateFlight = (id, flight) => {
  return Flight.findByIdAndUpdate(id, flight, { new: true });
};

module.exports = { createFlight, getFlights, getFlightsById, updateFlight };
