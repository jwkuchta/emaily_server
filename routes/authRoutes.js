const passport = require('passport')

module.exports = app => {
    app.get('/auth/google', passport.authenticate(
        'google', {
            scope: ['profile', 'email']
        }
    ))
    
    // at this point we have the code and passport will handle the token/code
    app.get('/auth/google/callback', passport.authenticate('google'))

    // destroys the cookie
    app.get('/api/logout', (req, res) => {
        req.logout()
        res.send(req.user)
    })

    // if we open this tab after logging in, it will have the cookie 
    app.get('/api/current_user', (req, res) => res.send(req.user))
}

