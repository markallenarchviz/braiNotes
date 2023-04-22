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

const signin = async (username, password) => {
    const user = await User.findOne({ username });

    const isCorrect = await bcrypt.compare(password, user.password);

    const errMsg = { status: 400, message: 'username or password incorrect' };
    if(!user || !isCorrect) throw errMsg
    
    return user
}
module.exports = {
    signup,
    signin,
};