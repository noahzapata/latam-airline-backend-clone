const Router = require('express');
const {
  create,
  createTest,
  list,
  show,
  destroy,
  update,
} = require('./booking.controller');
const { authenticate } = require('../middleware/auth');

const router = Router();

router.put('/payconfirm/update', update);
router.post('/', authenticate, create);
router.post('/test', createTest);
router.get('/', list);
router.get('/booking', show);
router.get('/destroy/:bookingId', destroy);

module.exports = router;
