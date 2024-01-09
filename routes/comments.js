const express = require('express');
const router = express.Router();
const { commentsController } = require('../controllers');

router.get('/', commentsController.list)

router.get('/:id', commentsController.show)

router.post('/', commentsController.create);



module.exports = router;