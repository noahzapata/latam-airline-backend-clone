const Router = require('express');
const { create, list, show, update } = require('./booking.controller');
const { authenticate } = require('../middleware/auth');

const router = Router();

router.post('/', authenticate, create);
router.get('/', list);
router.get('/booking', show);
router.put('/:bookingId', update);

module.exports = router;
