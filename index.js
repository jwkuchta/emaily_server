const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')

// generates a new application, used to setup config to listen to incoming requests and directing them to the right handler
const app = express()

// create route handler and associate with the route
// we no longer need it for oauth
// app.get('/', (req, res) => {
//     res.send({lala: ';a;a;a'})
// })

// we tell passport to create an instance of this particular strategy
passport.use(new GoogleStrategy())

// heroku injects environment variables telling us what port is dynamically set
const PORT = process.env.PORT || 5000
app.listen(PORT)