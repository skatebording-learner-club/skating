const express = require('express')
const router = express.Router();
//

const trick = require('./database-mongo/trickController.js');
const user = require('./database-mongo/userController.js');


router.post('/addTrick', trick.addTrick);
router.get('/retrieveTricks', trick.retrieveTricks);

// get from db spissific trick

module.exports = router;

// test the route from the postman 
// render tricks on the cards 
