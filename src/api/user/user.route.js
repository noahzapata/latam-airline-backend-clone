const Router = require('express');
const { authenticate } = require('../utils/auth');
const {
  create,
  list,
  show,
  update,
  destroy,
  signInHandle,
  signUpHandle,
} = require('./user.controller');

const router = Router();

router.post('/', create);
router.get('/', list);
router.get('/:userId', show);
router.put('/:userId', update);
router.delete('/:userId', destroy);
router.post('/signin', authenticate, signInHandle);
router.post('/signup', authenticate, signUpHandle);

module.exports = router;
