const notes = require("express").Router();
const { readFromFile, readAndAppend } = require("../helper/fsUtils");
const { v4: uuidv4 } = require("uuid");

notes.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

notes.post("/", (req, res) => {
  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };
    readAndAppend(newNote, "./db/db.json");
    res.json("Note successfully added!");
  } else {
    res.error("There was an error in adding note");
  }
});

module.exports = notes;