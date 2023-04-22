const router = require('express').Router();
const userController = require('../controller/user.controller');
const auth = require('../middlewares/auth.middleware');

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.get('/:id', auth, userController.getById);

module.exports = router;