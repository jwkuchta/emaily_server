const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
require('./services/passport')

// mongoose is interacting with MongoDB
mongoose.connect(keys.mongoURI, { useUnifiedTopology: true, useNewUrlParser: true })

const app = express()

// instead of saving it in a variable we call it immediately with app
require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000
app.listen(PORT)

