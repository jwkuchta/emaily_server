const mongoose = require('mongoose')
const { Schema } = mongoose

const RecipientSchema = require('./recipient')

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    // recipients: [ String ],
    recipients: [ RecipientSchema ],
    yes: { type: Number, default: 1 },
    no: { type: Number, default: 0 },
    // indicates that every survey is going to belong to a User
    // _user is a convention to establish relationship, reference
    _user: { type: Schema.Types.ObjectId, ref: 'User'},
    dateSent: Date,
    lastResponded: Date
})

mongoose.model('surveys', surveySchema)