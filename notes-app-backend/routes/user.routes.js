const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UserModel } = require('../models/UserModel');


const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.send('users!')
});

userRouter.post('/register', async (req, res) => {
    // if the user is new hash passowrd and store in db
    const { name, email, password } = req.body;

    const existingUser = await UserModel.find({ email: email });

    if(!!existingUser.length) {
        return res.send({
            message: 'user with this email already exists',
            status: 409
        });
    }

    bcrypt.hash(password, 5, async (err, hash) => {
        if(err) {
            return res.send({
                message: 'error encrypting password: ' + err,
                status: 500
            });
        }

        try {
            const user = new UserModel({ name, email, password:hash });
            await user.save();

            const newEntryArr = await UserModel.find({ email: email });

            const token = jwt.sign({ userId: newEntryArr[0]._id }, process.env.JWT_SECRET, {
                expiresIn: process.env.EXP_DURATION
            });

            return res.send({
                message: 'user added',
                token: token,
                status: 201
            });

        } catch (error) {
            return res.send({
                message: 'error adding user: ' + error.message,
                status: 500
            });
        }
    });
});

userRouter.post('/login', async (req, res) => {

    const { email, password } = req.body;

    try {
        const data = await UserModel.find({ email });

        if(data.length > 0) {
            const token = jwt.sign({ userId: data[0]._id }, process.env.JWT_SECRET, {
                expiresIn: process.env.EXP_DURATION
            });

            bcrypt.compare(password, data[0].password, async (err, result) => {
                if(err) {
                    return res.send({
                        message: 'error logging in: ' + err.message,
                        status: 500
                    });
                }

                if(result) {
                    return res.send({
                        message: 'Authentication successful',
                        token: token,
                        status: 200
                    });

                } else {
                    return res.send({
                        message: 'Incorrect password',
                        status: 401
                    });
                }
            });
        } else {
            return res.send({
                message: 'User not found',
                status: 404
            });
        }
    } catch (error) {
        return res.send({
            message: 'error logging in: ' + error.message,
            status: 500
        });
    }
});

userRouter.patch('/', async(req, res) => {
    try {
        const { id } = req.headers;

        await UserModel.findByIdAndUpdate({ _id: id }, req.body);

        res.send({
            message: 'User updated',
            status: 200
        });
    } catch (error) {
        res.send({
            message: 'Unable to update User: ' + error.message,
            status: 500
        });
    }
});

userRouter.delete('/', async(req, res) => {
    try {
        const { id } = req.headers;

        await UserModel.findByIdAndDelete({ _id: id });

        res.send({
            message: 'User deleted',
            status: 200
        });
    } catch (error) {
        res.send({
            message: 'Unable to delete user: ' + error.message,
            status: 500
        });
    }
});


module.exports = { userRouter };