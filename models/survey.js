const mongoose = require('mongoose')

const { Schema } = mongoose

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [String] // this will be an array of strings
})

mongoose.model('surveys', surveySchema)