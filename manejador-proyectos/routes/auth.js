var express = require('express');
var router = express.Router();
var authCtrl = require('../controllers/auth');

/* GET users listing. */
router.post('/signUp', function(req,res){
  authCtrl.signup;
}); 
router.post('/login', function(req,res){
  authCtrl.login;
}); 

module.exports = router;
