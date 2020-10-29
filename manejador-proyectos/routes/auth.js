var express = require('express');
var router = express.Router();
var authCtrl = require('../controllers/auth');

/* GET users listing. */
router.post('/signup', authCtrl.signup); 
router.post('/login', authCtrl.login); 

module.exports = router;
