const { createAirplane, getAirplanes } = require('./airplane.service');

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

module.exports = { create, list };
