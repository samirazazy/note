var express = require('express');
var router = express.Router();

const noteController = require('../controller/noteController');

router.get('/notes', noteController.getAllNotes);
router.post('/note/save', noteController.saveNote);
router.put('/note/update', noteController.updateAllNote);
router.delete('/note/delete', noteController.deleteAllNote);

module.exports = router;
