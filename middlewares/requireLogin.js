// this custom middleware could be used with the app object however we do not need it on all routes

module.exports = (req, res, next) => {
    if (!req.user) {
        return res.status(401).send({ error: 'You must log in' })
    }
    next()
}