const Router = require('express');
const { formData } = require('../../utils/formData');
const { authenticate } = require('../middleware/auth');
const {
  create,
  list,
  show,
  update,
  destroy,
  findUserflights,
  signInHandle,
  signUpHandle,
} = require('./user.controller');

const router = Router();

router.post('/users-booking/:bookingId', create);
router.get('/', list);
router.post('/userflights', findUserflights);
router.get('/data', authenticate, show);
router.post('/update', formData, update);
router.delete('/delete/:userId', destroy);
router.post('/signin', signInHandle);
router.post('/signup', signUpHandle);

module.exports = router;
