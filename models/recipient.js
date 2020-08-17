const mongoose = require('mongoose')

const { Schema } = mongoose

const recipientSchema = new Schema({
    email: String,
    responded: { type: Boolean, default: false }
})

// mongoose.model('recipients', recipientSchema)
// instead of connecting it directly to mongoose we will export it

module.exports = recipientSchema