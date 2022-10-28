const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helper/fsUtils');

notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    const { title, text } = req.body;

    if(req.body) {
        const newNote = {
            title,
            text
        };
        readAndAppend(newNote, './db/db.json');
        res.json('Note successfully added!');
    } else {
        res.errored('There was an error in adding note')
    }
});

module.exports = notes;