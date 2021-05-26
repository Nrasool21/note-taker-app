const { Router } = require("express");

const apiRouter = Router();

const apiFunction = require("../controllers/apiControllers");

//const { getAllNotes, saveNotes, deleteNotes, getNotesById } = require("../controllers/apiControllers"); 

const path = require("path");
const fs = require("fs");


//api/notes -> GET (all notes from db.json)
//apiRouter.get("/notes", apiFunction.getAllNotes);
const readFromDatabase = (fileName) => {
const data = fs.readFileSync(path.join(__dirname, "../../db/db.json"), "UTF-8");
return data
}

apiRouter.get("/notes", apiFunction.getAllNotes);
apiRouter.post("/notes", apiFunction.saveNotes);
apiRouter.delete("/notes/:id", apiFunction.deleteNotes);
apiRouter.get("/notes/:id", apiFunction.getNotesById);



module.exports = apiRouter;


