const express = require('express')
require('./services/passport')

const app = express()

// instead of saving it in a variable we call it immediately with app
require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000
app.listen(PORT)

