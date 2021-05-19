const { Router } = require("express");

const apiFunction = require("../controllers/apiControllers");

const apiRouter = Router();

  ///api/notes -> GET (all notes from db.json) 
  apiRouter.get("/notes", apiFunction.getAllNotes);
  apiRouter.post("/notes", apiFunction.saveNotes);
  apiRouter.delete("/notes/:id", apiFunction.deleteNotes);
  apiRouter.get("/notes/:id", apiFunction.getNotesById);


//htmlRouter.get("/notes", renderNotesPage);
//htmlRouter.get("*", renderIndexPage);

module.exports = apiRouter;
