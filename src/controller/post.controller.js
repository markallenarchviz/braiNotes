const postService = require('../service/post.service');

const addPost = async (req, res, next) => {
    try {
        const { title, postBody } = req.body;
        const addNewPost = await postService.addPost( title, postBody )
        return res.status(201).json(addNewPost);
    } catch (err) {
        next(err);
    }
};

const getAll = async (_req, res, next) => {
    try {
        const getAllPosts = await postService.getAll()
        return res.status(201).json(getAllPosts);
    } catch (err) {
        next(err);
    }
};

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const getById = await postService.getById(id)
        return res.status(201).json(getById);
    } catch (err) {
        next(err);
    }
};

const deleteById = async (req, res, next) => {
    try {
        const { id } = req.params;
        await postService.deleteById(id)
        return res.status(201).json();
    } catch (err) {
        next(err);
    }
};

module.exports = {
    addPost,
    getAll,
    getById,
    deleteById,
};