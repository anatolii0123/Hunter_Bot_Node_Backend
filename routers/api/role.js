const express = require('express');
const router = express.Router();
const controller = require('../../controllers/roleController');

router.get('/', controller.get);
router.post('/', controller.modifyRole);

module.exports = router;
