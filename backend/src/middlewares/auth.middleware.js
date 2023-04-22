const jwt = require('jsonwebtoken');

const authToken = (req, _res, next) => {
    try {
        const token = req.cookies.access_token;
        const errMsg = { status: 400, message: 'you are not authenticated' };
        if(!token) throw errMsg

        jwt.verify(token, process.env.JWT, (err, user) => {
            if (err) throw errMsg
            req.user = user;
            next();
        })
    } catch (err) {
        next(err);
    }
};

module.exports = authToken;