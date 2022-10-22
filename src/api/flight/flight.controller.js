const Airplane = require('../airplane/airplane.model');
const Airport = require('../airport/airport.model');
const {
  createFlight,
  getGoReturnFlights,
  getFlights,
  getFlightsById,
  updateFlight,
} = require('./flight.service');

const create = async (req, res) => {
  const dataFlight = req.body;
  const { airplaneId, airportDId, airportAId } = req.params;

  try {
    const airplane = Airplane.findById(airplaneId);
    if (!airplane) {
      throw new Error('This airplane does not exist');
    }
    const airportDeparture = await Airport.findById(airportDId);
    if (!airportDeparture) {
      throw new Error('The departure airport does not exist');
    }
    const airportArrival = await Airport.findById(airportAId);
    if (!airportArrival) {
      throw new Error('The arrival airport does not exist');
    }

    const flight = await createFlight(
      dataFlight,
      airplaneId,
      airportDId,
      airportAId
    );
    return res.status(200).json({ message: 'flight created', data: flight });
  } catch (err) {
    console.error(err);
    return res
      .status(400)
      .json({ message: 'flight could not be created', data: err });
  }
};

const listGoReturnFlights = async (req, res) => {
  const dataBooking = req.body;
  try {
    const flights = await getGoReturnFlights();
    const goFlights = flights.filter((flight) => {
      return (
        flight.departureAirport.city === dataBooking.departureCity &&
        flight.departureArrival.city === dataBooking.arrivalCity &&
        new Date(flight.date).getDay() ===
          new Date(dataBooking.dates[0]).getDay()
      );
    });
    const returnFlights = flights.filter((flight) => {
      return (
        flight.departureAirport.city === dataBooking.arrivalCity &&
        flight.departureArrival.city === dataBooking.departureCity &&
        new Date(flight.date).getDay() ===
          new Date(dataBooking.dates[1]).getDay()
      );
    });
    return res
      .status(200)
      .json({ message: 'Flights found', data: { goFlights, returnFlights } });
  } catch (err) {
    return res.status(400).json({ message: 'Flights not found', data: err });
  }
};
const list = async (_, res) => {
  try {
    const flights = await getFlights();
    return res.status(200).json({ message: 'Flights found', data: flights });
  } catch (err) {
    return res.status(400).json({ message: 'Flights not found', data: err });
  }
};

const show = async (req, res) => {
  const { flightId } = req.params;
  try {
    const flight = await getFlightsById(flightId);
    return res.status(200).json({ message: 'Flight found', data: flight });
  } catch (err) {
    return res.status(400).json({ message: 'Flight not found', data: err });
  }
};

const update = async (req, res) => {
  const dataFlight = req.body;
  const { flightId } = req.params;
  try {
    const flight = await updateFlight(flightId, dataFlight);
    return res.status(200).json({ message: 'Flight updated', data: flight });
  } catch (err) {
    return res
      .status(400)
      .json({ message: 'Flight could not be updated', data: err });
  }
};

module.exports = { create, listGoReturnFlights, list, show, update };
