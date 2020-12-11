const express = require('express')
const router = express.Router();
//
const trick = require('../database-mongo/controllers.js');


router.get('/retrieveTrick', trick.retrieveTrick);
// get from db spissific trick

module.exports = router;