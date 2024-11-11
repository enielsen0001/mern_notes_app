const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { NoteModel } = require('../models/NoteModel');
const { authenticator } = require('../middlewares/authenticator');


const noteRouter = express.Router();
noteRouter.use(authenticator);

noteRouter.get('/', (req, res) => {
    const token = req.headers.authorization;
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if(err) {
            return res.send({
                message: 'Unable to get notes: ' + err,
                status: 500
            });
        }

        try {
            let userNotes = await NoteModel.find({ user: decoded.userId });
            res.send({
                data: userNotes,
                message: 'success',
                status: 200
            });
        } catch (error) {
            res.send({
                message: 'Unable to get notes: ' + error.message,
                status: 500
            });
        }
    });
});

noteRouter.post('/', async (req, res) => {
    try {
        let note = new NoteModel(req.body);
        await note.save();

        res.send({
            message: 'Note created',
            status: 200
        });
    } catch (error) {
        res.send({
            message: 'Unable to save note: ' + error.message,
            status: 500
        });
    }

});

noteRouter.patch('/', async(req, res) => {
    try {
        const { id } = req.headers;

        await NoteModel.findByIdAndUpdate({ _id: id }, req.body);

        res.send({
            message: 'Note updated',
            status: 200
        });
    } catch (error) {
        res.send({
            message: 'Unable to update note: ' + error.message,
            status: 500
        });
    }
});

noteRouter.delete('/', async(req, res) => {
    try {
        const { id } = req.headers;

        await NoteModel.findByIdAndDelete({ _id: id });

        res.send({
            message: 'Note deleted',
            status: 200
        });
    } catch (error) {
        res.send({
            message: 'Unable to delete note: ' + error.message,
            status: 500
        });
    }
});

module.exports = { noteRouter };