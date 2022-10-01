const Router = require('express');
const { create, list, show, update } = require('./flight.controller');

const router = Router();

router.post('/', create);
router.get('/', list);
router.post('/:airplaneId', create);
router.get('/:flightId', show);
router.put('/:flightId', update);

module.exports = router;
