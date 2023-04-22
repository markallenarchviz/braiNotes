require('dotenv').config();

const { User: UserModel, User } = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signup = async (username, email, password) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = await UserModel.create({ username, email, password: hash });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT);

    return { token, newUser };
};

const signin = async (username, pass) => {
    const user = await User.findOne({ username });

    const isCorrect = await bcrypt.compare(pass, user.password);

    const errMsg = { status: 400, message: 'username or password incorrect' };
    if(!user || !isCorrect) throw errMsg

    const token = jwt.sign({ id: user._id }, process.env.JWT);
    const { password, ...othersData } = user._doc

    return { token, othersData };
}
module.exports = {
    signup,
    signin,
};