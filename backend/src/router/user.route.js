const router = require('express').Router();
const userController = require('../controller/user.controller');

router.post('/signup', userController.signup);

module.exports = router;