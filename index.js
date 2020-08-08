const express = require('express')
const mongoose = require('mongoose')
const cookiesSession = require('cookie-session') // we need to tell passport to keep track of cookies
const passport = require('passport')
const keys = require('./config/keys')
require('./models/User') // the order of these two statements matters
require('./services/passport')

// mongoose is interacting with MongoDB
mongoose.connect(keys.mongoURI, { useUnifiedTopology: true, useNewUrlParser: true })

const app = express()

// app.use wires up middleware
app.use(cookiesSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}))

app.use(passport.initialize())
app.use(passport.session())

// instead of saving it in a variable we call it immediately with app
require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000
app.listen(PORT)
