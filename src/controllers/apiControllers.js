const { v4: uuidv4 } = require("uuid");


const getAllNotes = (req, res) => {
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
