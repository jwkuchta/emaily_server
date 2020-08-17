const express = require('express')
const mongoose = require('mongoose')
const cookiesSession = require('cookie-session') // we need to tell passport to keep track of cookies
const passport = require('passport')
const keys = require('./config/keys')
const bodyParser = require('body-parser') // this is middleware
require('./models/user') // the order of these two matters
require('./models/survey')

require('./services/passport')

// mongoose is interacting with MongoDB
mongoose.connect(keys.mongoURI, { useUnifiedTopology: true, useNewUrlParser: true })

const app = express()

app.use(bodyParser.json())

// app.use wires up middleware
app.use(cookiesSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}))

app.use(passport.initialize())
app.use(passport.session())

// instead of saving it in a variable we call it immediately with app
require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app)
require('./routes/surveyRoutes')(app)

// new code that will run on heroku and handle react routes
if (process.env.NODE_ENV === 'production') {
    // express will serve up production assets
    app.use(express.static('client/build'))
    // express will serve up the index.html file if it does not recognize the route
    const path = require('path')
    app.get('*', (req, res) => {
        // serve index.html if you do not recognize the route
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000
app.listen(PORT)
