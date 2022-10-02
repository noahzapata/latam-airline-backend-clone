const Airplane = require('../airplane/airplane.model');
const {
  createFlight,
  getFlights,
  getFlightsById,
  updateFlight,
} = require('./flight.service');

const create = async (req, res) => {
  const dataFlight = req.body;
  const { airplaneId } = req.params;
  try {
    const airplane = Airplane.findById(airplaneId);
    if (!airplane) {
      throw new Error('This airplane does not exist');
    }
    const flight = await createFlight(dataFlight, airplaneId);
    return res.status(200).json({ message: 'flight created', data: flight });
  } catch (err) {
    console.error(err);
    return res
      .status(400)
      .json({ message: 'flight could not be created', data: err });
  }
};

const list = async (req, res) => {
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

module.exports = { create, list, show, update };
