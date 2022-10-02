const {
  createAirplane,
  getAirplanes,
  updateAirplanes,
} = require('./airplane.service');

const create = async (req, res) => {
  const dataAirplane = req.body;
  try {
    const airplane = await createAirplane(dataAirplane);
    return res
      .status(200)
      .json({ message: 'Airplane created succesfully', data: airplane });
  } catch (err) {
    return res
      .status(400)
      .json({ message: 'Airplane could not be created', data: err });
  }
};

const list = async (req, res) => {
  try {
    const airplanes = await getAirplanes();
    return res
      .status(200)
      .json({ messsage: 'Airplanes found', data: airplanes });
  } catch (err) {
    return res.status(400).json({ message: 'Airplanes not found', data: err });
  }
};

const update = async (req, res) => {
  const airplaneData = req.body;
  const { airplaneId } = req.params;
  try {
    const airplane = await updateAirplanes(airplaneId, airplaneData);
    return res
      .status(200)
      .json({ message: 'Airplane updated', data: airplane });
  } catch (err) {
    return res
      .status(200)
      .json({ message: 'Airplane could not be updated', data: err });
  }
};

module.exports = { create, list, update };
