const express = require('express');
const router = express.Router();
const memberCtrl = require('../controllers/member')

/* GET users listing. */
router.get('/:page?', memberCtrl.list);

router.get('/id/:id', memberCtrl.index);

router.put('/:id', memberCtrl.update);

router.delete('/:id', memberCtrl.destroy);

module.exports = router;
