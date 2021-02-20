const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({

    level: String,
    marker: String,
    date: String,
    message: []
});

Log = mongoose.model('Log', logSchema);