const express = require('express');
const app = express();
//importing modular routers for /notes
const notesRouter = require('./notes')

app.use('/notes', notesRouter);

module.exports = app;