const Router = require('express');
const { create } = require('./booking.controller');

const router = Router();

router.post('/', create);

module.exports = router;
