require('dotenv').config();

const { User: UserModel } = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signup = async (username, email, password) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = await UserModel.create({ username, email, password: hash });
//  await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT);

    return newUser;
};

module.exports = {
    signup,
}