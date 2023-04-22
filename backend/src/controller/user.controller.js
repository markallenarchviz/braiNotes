const userService = require('../service/user.service');

const signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const { token, othersData } = await userService.signup(username, email, password);
        return res.cookie("access_token", token, {
            httpOnly: true,
        })
        .status(200)
        .json(othersData);
    } catch (err) {
        next(err);
    }
};

const signin = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const { token, othersData } = await userService.signin(username, password);
        return res.cookie("access_token", token, {
            httpOnly: true,
        })
        .status(200)
        .json(othersData);
    } catch (err) {
        next(err);
    }
};

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const getById = await userService.getById(id);
        return res.cookie("access_token", 'adasd', {
            httpOnly: true,
        })
        .status(200)
        .json(getById);
    } catch (err) {
        next(err);
    }
};

const updateBio = async (req, res, next) => {
    try {
        const { body } = req;
        const paramsId = req.params.id;
        const userId = req.user.id;

        const updateBio = await userService.updateBio(paramsId, userId, body);

        return res.status(200).json(updateBio);
    } catch (err) {
        next(err);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const paramsId = req.params.id;
        const userId = req.user.id;

        await userService.deleteUser(paramsId, userId);
        
        return res.status(200).json({ message: "user deleted" });
    } catch (err) {
        next(err);
    }
};


module.exports = {
    signup,
    signin,
    getById,
    updateBio,
    deleteUser,
};
