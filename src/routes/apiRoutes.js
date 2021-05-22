//const { Router } = require("express");

const apiRouter = require("express").Router();
const store = require("../../db/store");

const apiFunction = require("../controllers/apiControllers");

///api/notes -> GET (all notes from db.json)
// apiRouter.get("/notes", apiFunction.getAllNotes);
apiRouter.get("/notes", (req, res) => {
  store
    .getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});
//apiRouter.post("/notes", apiFunction.saveNotes);
apiRouter.post("/notes", (req, res) => {
  store
    .addNote(req.body)
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});
//apiRouter.delete("/notes/:id", apiFunction.deleteNotes);
apiRouter.delete("/notes/:id", (req, res) => {
  store
    .removeNote(req.params.id)
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});
//apiRouter.get("/notes/:id", apiFunction.getNotesById);
apiRouter.get("/notes/:id", (req, res) => {
  store
    .getNotes(req.body.id)
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});
//htmlRouter.get("/notes", renderNotesPage);
//htmlRouter.get("*", renderIndexPage);

module.exports = apiRouter;


