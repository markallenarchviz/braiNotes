const postService = require('../service/post.service');

const signup = async (req, res, next) => {
    try {
        return res.status(201).json({ message: 'signup route' });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    signup,
};