const Router = require('express');
const {
  create,
  listGoReturnFlights,
  list,
  show,
  update,
} = require('./flight.controller');

const router = Router();

router.post('/go-return', listGoReturnFlights);
router.get('/', list);
router.post('/:airplaneId/:airportDId/:airportAId', create);
router.get('/:flightId', show);
router.put('/:flightId', update);

module.exports = router;
