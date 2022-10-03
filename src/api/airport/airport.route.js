const { create, list, show, update } = require('./airport.controller');
const Router = require('express');

const router = Router();

router.post('/', create);
router.get('/', list);
router.get('/:airportId', show);
router.put('/:airportId', update);

module.exports = router;
