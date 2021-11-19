const app = require('express').Router()

const authentification = require('./api/auth')
const discord = require('./api/discord')
const discord = require('./api/role')

app.use('/auth', authentification)
app.use('/discord', discord)
app.use('/role', role)


module.exports = app;