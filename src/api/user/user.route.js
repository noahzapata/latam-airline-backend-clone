const Router = require('express');
const userController = require('./user.controller');

const router = Router();

router.post('/', userController.create);
router.get('/', userController.list);
router.get('/:userId', userController.show);
router.put('/:userId', userController.update);
router.delete('/:userId', userController.destroy);

module.exports = router;
