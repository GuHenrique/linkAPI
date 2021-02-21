const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

})

const dealSchema = new mongoose.Schema({

})

User = mongoose.model('User', userSchema)
Deal = mongoose.model('Deal', dealSchema)

module.exports = {User, Deal}