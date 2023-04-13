const { Post: PostModel }  = require('../models/Post');

const addPost = async (title, postBody) => {
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

module.exports = {
    addPost,
    getAll,
}