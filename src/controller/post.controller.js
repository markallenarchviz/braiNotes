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

const getAll = async (_req, res, _next) => {
    try {
        const getAllPosts = await postService.getAll()
        return res.status(201).json(getAllPosts);
    } catch (err) {
        console.log(err);
    }
};



module.exports = {
    addPost,
    getAll,
};