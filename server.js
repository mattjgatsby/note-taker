const express = require("express");
const fs = require("fs");
const path = require("path");
const PORT = process.env.port || 3001;
const app = express();
const api = require('./routes/index.js')

//middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

app.use(express.static("./public"));

//get route for notes.html
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, "/public/notes.html"))
);

//get route for index.html
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.listen(PORT, () => console.log(`App listening at http://localhost${PORT}`));
