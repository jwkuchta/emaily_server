const keys = require('../config/keys')
const requireLogin = require('../middlewares/requireLogin')
const stripe = require('stripe')(keys.stripeSecretKey)

module.exports = app => {
    // we are not calling requireLogin but rather giving express a reference
    // we can put as many arguments/middlewares as we want but we have to make sure
    // one of them eventually returns a req and res and handle those
    app.post('/api/stripe', requireLogin, async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        })
        // passport gives us access to req.user
        req.user.credits += 5
        const user = await req.user.save() // updated user model returned fresh from the save()
        res.send(user) // we respond to the request with the right user (send back to browser)
    })
}