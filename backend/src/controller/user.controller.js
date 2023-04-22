const userService = require('../service/user.service');

const signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const token = await userService.signup(username, email, password);
        return res.cookie("access_token", token, {
            httpOnly: true,
        })
        .status(200)
        .json(token);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    signup,
};