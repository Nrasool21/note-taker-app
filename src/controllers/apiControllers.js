//const { v4: uuidv4 } = require("uuid");
const path = require("path");
const fs = require("fs");
//const cors = require("cors");

const BASE_URL = "http://localhost:3000/api/notes";

//app.use(cors());

const getAllNotes = (req, res) => {
  console.log("Welcome");
  const filePath = path.join(__dirname, "/db/db.json");
  const getAllNotesFromDb = fs.readFileSync("filePath", "UTF-8");
  res.json(JSON.parse(getAllNotesFromDb));
};

const saveNotes = (req, res) => {
  let newId = uuidv4();
  res.json({ message: newId });
};

const deleteNotes = (req, res) => {
  res.json({ message: "bye" });
};

const getNotesById = (req, res) => {
  res.json({ message: "bye" });
};

module.exports = { getAllNotes, saveNotes, deleteNotes, getNotesById };
