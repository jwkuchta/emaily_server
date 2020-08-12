const mongoose = require('mongoose')
// const Schema = mongoose.Schema
// new syntax with destructering
const { Schema } = mongoose

// we can add to this object to modify the schema
const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 }
})

// telling mongoose we want to create a new collection called 'users'
mongoose.model('users', userSchema)
