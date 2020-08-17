const mongoose = require('mongoose')
const { Schema } = mongoose

import RecipientSchema from './recipient'

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    // recipients: [ String ],
    recipients: [ RecipientSchema ],
    yes: { type: Number, default: 1 },
    no: { type: Number, default: 0 }
})

mongoose.model('surveys', surveySchema)