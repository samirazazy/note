var express = require('express');
var router = express.Router();

const noteController = require('../controller/noteController');

router.get('/notes', noteController.getAllNotes);
router.post('/notes/save', noteController.saveNote);
router.put('/notes/update', noteController.updateAllNote);
router.delete('/notes/delete/:noteId', noteController.deleteAllNote);

module.exports = router;
