const generator = require('../util/generator');
const memStorage = require('../util/memory.storage');
const model = require('../model/note.model');

exports.getAllNotes = (req, res) => {
  const values = memStorage.getValues(memStorage.store);
  return res.status(200).send(JSON.stringify(values));
};

exports.saveNote = (req, res) => {
  const seqId = generator.generate();
  const createdBy = 'admin';
  const createdOn = new Date();

  //req body
  let title = req.body.title;
  let content = req.body.content;

  if (!title || !content)
    return res
      .status(500)
      .send({ errors: `title or content shouldn't be empty!` });

  const Note = model.Note;
  let noteObj = new Note(seqId, title, content, createdBy, createdOn);
  memStorage.store.setItem(seqId, noteObj);
  return res.status(201).send('created successfully');
};

exports.updateAllNote = (req, res) => {
  const createdBy = 'admin';
  const createdOn = new Date();

  //req body
  let noteId = req.body.noteId;
  let title = req.body.title;
  let content = req.body.content;

  if (!noteId)
    return res.status(500).send({ errors: ` noteId shouldn't be empty!` });

  if (!title || !content) {
    return res
      .status(500)
      .send({ errors: `title or content shouldn't be empty!` });
  }

  if (!memStorage.store.getItem(noteId))
    return res.status(500).send({ errors: `noteId is not exist` });

  const Note = model.Note;
  let noteObj = new Note(noteId, title, content, createdBy, createdOn);
  memStorage.store.setItem(noteId, noteObj);
  return res.status(200).send('updated successfully');
};

exports.deleteAllNote = (req, res) => {
  let noteId = req.params.noteId;

  if (!noteId)
    return res.status(500).send({ errors: ` noteId shouldn't be empty!` });

  if (!memStorage.store.getItem(noteId))
    return res.status(500).send({ errors: `noteId is not exist` });

  memStorage.store.removeItem(noteId);
  return res.status(200).send('Deleted successfully');
};
