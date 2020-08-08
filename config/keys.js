// Heroku sets process.env.NODE_ENV when we configure env variables on Heroku
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod')
} else {
    // this way we both export and require in the dev keys
    module.exports = require('./dev')
}