const express = require('express');
const router = express.Router();
const controller = require('../../controllers/authController');

router.get('/', controller.get);
router.get('/discord', controller.discord);
router.get('/discord/redirect', controller.redirect);

module.exports = router;
