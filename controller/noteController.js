const generator = require('../util/generator');

exports.getAllNotes = (req, res) => {
  const seqId = generator.generate();

  res.send('get all notes' + seqId);
};
exports.saveNote = (req, res) => {
  res.send('save note');
};

exports.updateAllNote = (req, res) => {
  res.send('update note');
};

exports.deleteAllNote = (req, res) => {
  res.send('delete note');
};
