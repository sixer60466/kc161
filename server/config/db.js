const mongoose = require("mongoose");
const autoIncrement = require('mongoose-auto-increment');

mongoose.connect('mongodb://127.0.0.1:27017/nick')
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((err) => {
        console.error(`Failed to connect MongoDB:${err}`)
    })


autoIncrement.initialize(mongoose.connection);

module.exports = mongoose.connection;