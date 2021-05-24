//const { Router } = require("express");

const apiRouter = require("express").Router();
const dbStore = require("../../db/store");
const fs = require("fs");

const apiFunction = require("../controllers/apiControllers");

const readFileNotes = fs.readFileSync("../../db/db.json");
console.log(readFileNotes)

//api/notes -> GET (all notes from db.json)
//apiRouter.get("/notes", apiFunction.getAllNotes);
apiRouter.get("/notes", (req, res) => {
  dbStor
    .getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});
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


