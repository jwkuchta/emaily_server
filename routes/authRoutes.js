const passport = require('passport')

module.exports = app => {
    app.get('/auth/google', passport.authenticate(
        'google', {
            scope: ['profile', 'email']
        }
    ))
    
    // at this point we have the code and passport will handle the token/code
    app.get('/auth/google/callback', passport.authenticate('google'))
}

