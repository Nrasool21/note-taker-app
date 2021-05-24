//const { Router } = require("express");

const apiRouter = require("express").Router();
const path = require("path");
const fs = require("fs");

const apiFunction = require("../controllers/apiControllers");


//api/notes -> GET (all notes from db.json)
//apiRouter.get("/notes", apiFunction.getAllNotes);
const readFromDatabase = (fileName) => {
const data = fs.readFileSync(path.join(__dirname, "/db/db.json"), "UTF-8");
return data
}

const getAllNotes = (req, res) => {
  console.log("Welcome");
  const allNotes = readFromDatabase("dbNotes");
  console.log(allNotes)
  res.json(JSON.parse(dbNotes));
};
//apiRouter.post("/notes", apiFunction.saveNotes);
apiRouter.post("/notes", (req, res) => {
  dbStore
    .addNote()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});
//apiRouter.delete("/notes/:id", apiFunction.deleteNotes);
apiRouter.delete("/notes/:id", (req, res) => {
  dbStore
    .removeNote()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});
//apiRouter.get("/notes/:id", apiFunction.getNotesById);


module.exports = apiRouter;


