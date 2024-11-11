const mongoose = require('mongoose');
require('dotenv').config();

const connection = mongoose.connect(process.env.mongoUrl, {
    dbName: 'notesapp'
});

module.exports = { connection };