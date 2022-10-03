const Router = require('express');
const { create, list, show, update } = require('./flight.controller');

const router = Router();

router.get('/', list);
router.post('/:airplaneId/:airportDId/:airportAId', create);
router.get('/:flightId', show);
router.put('/:flightId', update);

module.exports = router;
