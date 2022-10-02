const Router = require('express');
const { create, list, show, update } = require('./booking.controller');

const router = Router();

router.post('/:userId', create);
router.get('/', list);
router.get('/booking', show);
router.put('/:bookingId', update);

module.exports = router;
