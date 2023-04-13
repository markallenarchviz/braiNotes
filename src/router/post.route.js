const router = require('express').Router();
const postController = require('../controller/post.controller');

router.post('/', postController.addPost);
router.get('/', postController.getAll);


module.exports = router;