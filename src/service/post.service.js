const { Post: PostModel }  = require('../models/Post');

const addPost = async (title, postBody) => {
    const postCreation = await PostModel.create({
        title,
        postBody
    })
    return postCreation
};

module.exports = {
    addPost,
}