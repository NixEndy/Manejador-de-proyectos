var express = require('express');
var router = express.Router();
var memberCtrl = require('../controllers/member');

/* GET users listing. */
router.post('/create',memberCtrl.create);

module.exports = router;
