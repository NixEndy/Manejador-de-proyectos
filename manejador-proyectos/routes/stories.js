var express = require('express');
var router = express.Router();
var storiesCtrl = require('../controllers/stories');

/* GET users listing. */
router.get('/', storiesCtrl.list);

router.get('/:id', storiesCtrl.index);

router.post('/', storiesCtrl.create);

router.put('/', storiesCtrl.update);

router.delete('/', storiesCtrl.destroy);

module.exports = router;
