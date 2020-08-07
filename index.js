const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('./keys')

// generates a new application, used to setup config to listen to incoming requests and directing them to the right handler
const app = express()

// create route handler and associate with the route
// we no longer need it for oauth
// app.get('/', (req, res) => {
//     res.send({lala: ';a;a;a'})
// })

// we tell passport to create an instance of this particular strategy
passport.use(
    new GoogleStrategy({
        // has to be ID not Id!!!
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
        // the following arrow function gets executed after we get the token back after line 36
        // we can include more arguments, not just the access token
    }, (accessToken, refreshToken, profile, done) => {
        console.log('access token: ', accessToken)
        console.log('refresh token: ', refreshToken)
        console.log('profile: ', profile)
        console.log('done: ', done)
    })
)

// we need to add a route handler to make sure the user is redirected to auth
// we will tell express to involve passport
// passport know to use 'google' as an instance of GoogleStrategy, it is an internal identifier
app.get('/auth/google', passport.authenticate(
    'google', {
        scope: ['profile', 'email']
    }
))

// at this point we have the code and passport will handle the token/code
app.get('/auth/google/callback', passport.authenticate('google'))

// heroku injects environment variables telling us what port is dynamically set
const PORT = process.env.PORT || 5000
app.listen(PORT)
// something new here to test nodemon
