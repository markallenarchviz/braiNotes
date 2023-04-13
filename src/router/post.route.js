const router = require('express').Router();
const postController = require('../controller/post.controller');

router.post('/', postController.addPost);
router.get('/', postController.getAll);
router.get('/:id', postController.getById);
router.delete('/:id', postController.deleteById);
router.put('/:id', postController.updateById);

module.exports = router;