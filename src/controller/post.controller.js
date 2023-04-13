const postService = require('../service/post.service');

const addPost = async (req, res, _next) => {
    try {
        const { title, postBody } = req.body;
        const addNewPost = await postService.addPost( title, postBody )
        return res.status(201).json(addNewPost);
    } catch (err) {
        console.log(err);
    }
};


module.exports = {
    addPost,
};