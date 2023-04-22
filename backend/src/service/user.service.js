require('dotenv').config();

const { User: UserModel, User } = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signup = async (username, email, pass) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(pass, salt);

    const newUser = await UserModel.create({ username, email, password: hash });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT);

    const { password, ...othersData } = newUser._doc

    return { token, othersData };
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

const getById = async (id) => {
    const user = await User.findById(id);
    const { password, ...othersData } = user._doc
    return othersData;
}

const updateBio = async (paramsId, userId, body) => {
    if (paramsId === userId) {
        const updatedUser = await User.findByIdAndUpdate(paramsId, {
            $set: body,
        }, {
            new: true
        }
        )
        return updatedUser.description
    } else {
        const errMsg = { status: 403, message: 'you can only update your own account' };
        throw errMsg
    }
}

const deleteUser = async (paramsId, userId) => {
    if (paramsId === userId) {
        await User.findByIdAndDelete(paramsId)
    } else {
        const errMsg = { status: 403, message: 'you can only delete your own account' };
        throw errMsg
    }
}


module.exports = {
    signup,
    signin,
    getById,
    updateBio,
    deleteUser,
};