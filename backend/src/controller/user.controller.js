const userService = require('../service/user.service');

const signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const { token, newUser } = await userService.signup(username, email, password);
        return res.cookie("access_token", token, {
            httpOnly: true,
        })
        .status(200)
        .json(newUser);
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

module.exports = {
    signup,
    signin,
};