const Router = require('express');
const {
  create,
  createTest,
  list,
  show,
  update,
} = require('./booking.controller');
const { authenticate } = require('../middleware/auth');

const router = Router();

router.post('/', authenticate, create);
router.post('/test', createTest);
router.get('/', list);
router.get('/booking', show);
router.post('/payconfirm/update', update);

module.exports = router;
