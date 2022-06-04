// importing package to get correct file path for HTML
const fs = require('fs');
const uuid = require('uuid');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    const data = fs.readFile('./db/db.json');
    res.json(JSON.parse(data));
});

router.post('/notes', (req, res) =>{
    const notes = JSON.parse(fs.readFile('./db/db.json'));
    const addNote = req.body;
    addNote.id = uuid.v4();
    notes.push(addNote);
    fs.writeFile('./db/db.json', JSON.stringify(notes));
    res.json(notes);
});

router.delete('/notes/:id', (req, res) => {
    const notes = JSON.parse(fs.readFile('./db/db.json'));
    const deleteNote = notes.filter((rmvNote) => rmvNote.id !== req.params.id);
    fs.writeFile('./db/db.json', JSON.stringify(deleteNote));

    res.json(deleteNote);
});

module.exports = router;