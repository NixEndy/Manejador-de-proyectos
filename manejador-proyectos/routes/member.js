const express = require('express');
const router = express.Router();
const memberCtrl = require('../controllers/member')

/* GET users listing. */
router.get('/:page?', controller.list);

router.get('/id/:id', controller.index);

router.put('/:id', controller.update);

router.delete('/:id', controller.destroy);

module.exports = router;
