const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const keys = require('../config/keys')


const User = mongoose.model('users') // one argument neads we want to fetch something from the schema

// this user comes from whatever we got back when we retrieved/saved the user from MongoDB
// now we need to tell it to generate a token/cookie
passport.serializeUser((user, done) => {
    // this is NOT the profile.id but instead a unique identifier generated by MongoDB
    done(null, user.id) 
})

// this is the opposite of serialize, we take the id and look for the user in MongoDB
passport.deserializeUser((id, done) => {
    User.findById(id).then(user => done(null, user))
})

// with traditional promise syntax
// passport.use(
//     new GoogleStrategy({
//         clientID: keys.googleClientID,
//         clientSecret: keys.googleClientSecret,
//         callbackURL: '/auth/google/callback',
//         proxy: true
//     }, (accessToken, refreshToken, profile, done) => {
//         User.findOne({ googleId: profile.id }) // this returns a promise, not an instance
//         .then((existingUser) => {
//             if (existingUser) {
//                 done(null, existingUser) // done(no error, user)
//             } else {
//                 new User({googleId: profile.id}).save()
//                 // we don't want to call done() until we are sure the user was saved an we got the instance back
//                 .then(user => done(null, user))
//             }
//         })
//     })
// )

// refactored to async/await
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    }, async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ googleId: profile.id }) // this returns a promise, not an instance
        if (existingUser) {
            done(null, existingUser)
        } else {
            const user = await new User({googleId: profile.id}).save()
            done(null, user)
        }
    })
)

// GoogleStrategy takes two arguments 1. Credentials object 2. Callback to handle the user object
