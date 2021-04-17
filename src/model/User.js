const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    user_name: String,
    user_password: String
})

const user = mongoose.model('User', DataSchema)

module.exports = user