const { v4: uuidv4 } = require("uuid");
const path = require("path");

const fs = require("fs");
const database = require("../../db/db.json");

//const cors = require("cors");
const BASE_URL = "http://localhost:3000/api/notes";

//app.use(cors());
const readNotes = () => {
  const notes = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../../db/db.json"), "utf-8")
  );
  return notes
}
const getAllNotes = (req, res) => {
  const notes = readNotes()

  res.json(notes);
};

const saveNotes = (req, res) => {
  const { title, text } = req.body;
  const notes = readNotes()
  const id = uuidv4();
  const newNotes = {
    title,
    text,
    id,
  };
  notes.push(newNotes);
  fs.writeFile(path.join(__dirname, "../../db/db.json"), JSON.stringify(notes), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    res.json(notes);
  });
  
};

const deleteNotes = (req, res) => {
  const { id } = req.params;
  const notes = readNotes();
  const newNote = notes.filter((each) => {
    return each.id !== id
  })
  res.json(newNote);
};

const getNotesById = (req, res) => {
  const { id } = req.params;
  const notes = readNotes();
  const singleNote = notes.find((each) => {
    
    return each.id === id;
    
  })
  //console.log(singleNote);
  res.json(singleNote);
};

module.exports = { getAllNotes, saveNotes, deleteNotes, getNotesById };
