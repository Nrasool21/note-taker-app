const { v4: uuidv4 } = require("uuid");
const path = require("path")
const fs = require("fs");


const getAllNotes = (req, res) => {
  const filePath = path.join(__dirname, "/db/db.json")
  console.log(filePath);
  const getAllNotesFromDb = fs.readFileSync("filePath", "UTF-8");
  console.log(getAllNotesFromDb)
  res.json({ message: "hello" });
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
