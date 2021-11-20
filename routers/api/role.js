const express = require('express');
const router = express.Router();
const controller = require('../../controllers/roleController');

router.get('/', controller.get);
// router.post('/', controller.create);
// router.put('/', controller.update);
// router.delete('/', controller.remove);

module.exports = router;
