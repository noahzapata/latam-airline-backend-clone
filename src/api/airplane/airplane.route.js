const Router = require('express');
const { create, list } = require('./airplane.controller');

const router = Router();

router.post('/', create);
router.get('/', list);

module.exports = router;
