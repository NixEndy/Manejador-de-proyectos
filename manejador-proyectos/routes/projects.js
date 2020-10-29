var express = require('express');
var router = express.Router();
var projectCtrl = require('../controllers/project');

/* GET users listing. */
router.get('/', projectCtrl.list);

router.get('/:id', projectCtrl.index);

router.post('/', projectCtrl.create);

router.put('/', projectCtrl.update);

router.delete('/', projectCtrl.destroy);

module.exports = router;
