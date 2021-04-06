const generator = require('../util/generator');
const memStorage = require('../util/memory.storage');
const model = require('../model/note.model');

exports.getAllNotes = (req, res) => {
  const seqId = generator.generate();
  memStorage.store.setItem(seqId, '1st key');

  const seqId2 = generator.generate();
  memStorage.store.setItem(seqId2, '2st key');

  const keys = memStorage.getKyes(memStorage.store);
  const values = memStorage.getValues(memStorage.store);

  const Note = model.Note;
  let noteObj = new Note(seqId, 'dd', 'dd', 'dd', new Date());

  console.log(noteObj);
  //   console.log(keys, values);
  console.log(JSON.stringify(keys), JSON.stringify(values));
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
