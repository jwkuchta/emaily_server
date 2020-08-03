const express = require('express')

// generates a new application, used to setup config to listen to incoming requests and directing them to the right handler
const app = express()

// create route handler and associate with the route
app.get('/', (req, res) => {
    res.send({hi: 'there'})
})

// heroku injects environment variables telling us what port is dynamically set
const PORT = process.env.PORT || 5000
app.listen(PORT)