const addPost = async (_req, res, next) => {
    try {
        return res.status(201).json({ message: "rota de addPost" });
    } catch (err) {
        next(err);
    }
};


module.exports = {
    addPost,
};