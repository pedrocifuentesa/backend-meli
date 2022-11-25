var express = require('express');
var router = express.Router();

const {
  getitem
} = require('./../constroller/item_controller.js');

router.get('/items', getitem);

module.exports = router;