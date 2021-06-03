const { Router } = require("express");

const apiRouter = Router();

const apiFunction = require("../controllers/apiControllers");

const {
  getAllNotes,
  saveNotes,
  deleteNotes,
  getNotesById,
} = require("../controllers/apiControllers");

apiRouter.get("/notes", apiFunction.getAllNotes);
apiRouter.post("/notes", apiFunction.saveNotes);
apiRouter.delete("/notes/:id", apiFunction.deleteNotes);
apiRouter.get("/notes/:id", apiFunction.getNotesById);

module.exports = apiRouter;
