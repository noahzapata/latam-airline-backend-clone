const Router = require('express');
const { create, list, show, update } = require('./booking.controller');

const router = Router();

router.post('/', create);
router.get('/', list);
router.get('/booking', show);
router.put('/booking', update);

module.exports = router;
