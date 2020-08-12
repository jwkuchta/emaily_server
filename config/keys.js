// Heroku sets process.env.NODE_ENV when we configure env variables on Heroku
// this sort of logic is not an option on the front end because of import vs require
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}