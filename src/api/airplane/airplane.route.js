const Router = require('express');
const { create, list, update } = require('./airplane.controller');

const router = Router();

router.post('/', create);
router.get('/', list);
router.put('/:airplaneId', update);

module.exports = router;
