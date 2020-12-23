const express = require('express')
const router = express.Router();
//

const trick = require('./database-mongo/trickController.js');
const user = require('./database-mongo/userController.js');
const auth = require("./database-mongo/auth")


router.post('/addTrick', trick.addTrick);
router.get('/retrieveTricks', trick.retrieveTricks);


router.post('/signupClient', user.signup);
router.post('/signinClient', user.signin);
router.post('/clientlogout', user.userlogout);

router.get('/auth', auth, user.auth);

// get from db spissific trick

module.exports = router;

// test the route from the postman 
// render tricks on the cards 
