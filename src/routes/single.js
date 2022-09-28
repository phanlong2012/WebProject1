const express = require('express');
const router = express.Router();

const singleController = require('../app/controllers/SingleController');

router.use('/', singleController.show);

module.exports = router;
