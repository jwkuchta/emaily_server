const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecretKey)

module.exports = app => {
    app.post('/api/stripe', async (req, res) => {
        if (!req.user) {
            return res.status(401).send({ error: 'You must log in to buy credits'})
        }
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