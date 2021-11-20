const config = require('../../config')

const passport = require('passport')

const get = async (req, res, next) => {
    if (req.user) {
        res.json({ msg: "authorized", user: req.user })
    } else {
        res.json({ msg: "unauthorized" })
    }
}

const discord = () => {
    return passport.authenticate('discord')

}

const redirect = () => {
    passport.authenticate('discord', {
        failureRedirect: `${config.FRONTEND_URL}/`
    }), (req, res) => {
        res.redirect(`${config.FRONTEND_URL}/dashboard`)
    }
}

module.exports = {
    get,
    discord,
    redirect,
}