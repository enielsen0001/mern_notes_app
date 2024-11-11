const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticator = (req, res, next) => {
    const token = req.headers.authorization;

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err) {
            return res.send({
                message: 'error validating authentication: ' + err,
                status: 401
            });
        }

        if(decoded) {
            req.body.user = decoded.userId;
            next();
        } else {
            res.send({
                message: 'invalid token, please log in',
                status: 401
            });
        }

    });
}

module.exports = { authenticator };