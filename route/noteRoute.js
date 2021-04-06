var express = require('express');
var router = express.Router();

const noteController = require('../controller/noteController');

router.get('/notes', noteController.getAllNotes);

module.exports = router;
