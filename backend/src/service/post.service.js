const { Post: PostModel }  = require('../models/Post');

const addPost = async (title, postBody) => {
    const errMsg = { status: 400, message: 'Some required fields are missing' };
    if (!title || !postBody) throw errMsg;
    const postCreation = await PostModel.create({
        title,
        postBody
    })
    return postCreation
};

const getAll = async () => {
    const getAllPosts = await PostModel.find()
    return getAllPosts
};

const getById = async (id) => {
    const getById = await PostModel.findById(id)
    return getById
};

const deleteById = async (id) => {
    const deleteById = await PostModel.findByIdAndDelete(id)
    return deleteById
};

const updateById = async (id, title, postBody) => {
    const errMsg = { status: 400, message: 'Some required fields are missing' };
    if (!title || !postBody) throw errMsg;
    const updateById = await PostModel.findByIdAndUpdate(id, {
        title,
        postBody
    })
    return updateById
};

module.exports = {
    addPost,
    getAll,
    getById,
    deleteById,
    updateById,
}