var express = require('express');
var router = express.Router();
var storiesCtrl = require('../controllers/stories');

/* GET users listing. */
router.get('/', storiesCtrl.list);

router.get('/:id', storiesCtrl.index);

router.post('/', storiesCtrl.create);

router.put('/', storiesCtrl.update);

router.delete('/', storiesCtrl.destroy);
<<<<<<< HEAD
=======

>>>>>>> 76593bc1831dd21a9b47e18397bcec1cb5bbc70c

module.exports = router;
