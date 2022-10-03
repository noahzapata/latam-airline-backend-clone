const {
  createAirport,
  findAirport,
  updateAirport,
  allAirports,
} = require('./airport.service');

const create = async (req, res) => {
  const airportData = req.body;
  try {
    const airport = await createAirport(airportData);
    return res.status(200).json({ message: 'Airport created', data: airport });
  } catch (err) {
    return res
      .status(400)
      .json({ message: 'The airport could not be created', data: err });
  }
};

const list = async (req, res) => {
  try {
    const airports = await allAirports();
    return res.status(200).json({ message: 'Airports found', data: airports });
  } catch (err) {
    return res
      .status(200)
      .json({ message: 'Airports could not be found', data: err });
  }
};

const show = async (req, res) => {
  const { airportId } = req.params;
  try {
    const airport = await findAirport(airportId);
    return res.status(200).json({ message: 'Airport found', data: airport });
  } catch (err) {
    return res.status(200).json({ message: 'Airport not found', data: err });
  }
};

const update = async (req, res) => {
  const { airportId } = req.params;
  const airportData = req.body;
  try {
    const airport = await updateAirport(airportId, airportData);
    return res.status(200).json({ message: 'Airport updated', data: airport });
  } catch (err) {
    return res
      .status(200)
      .json({ message: 'Airport could no be updated', data: err });
  }
};

module.exports = { create, list, show, update };
