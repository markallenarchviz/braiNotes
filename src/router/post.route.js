const router = require('express').Router();
const postController = require('../controller/post.controller');

router.use('/post', postController.addPost);

module.exports = router;