const express = require('express');
const router = express.Router();
const controller = require('../../controllers/authController');
const passport = require('passport')

router.get('/', passport.authenticate('discord'));
router.get('/discord', controller.discord);
router.get('/discord/redirect', controller.redirect);

module.exports = router;
