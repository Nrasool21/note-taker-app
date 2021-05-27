const { v4: uuidv4 } = require("uuid");
const path = require("path");
//const filePath = path.join(__dirname, "../../db/db.json");
//const getAllNotesFromDb = fs.readFileSync("filePath", "UTF-8");
const fs = require("fs");
fs.readFile("../../db/db.json", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
const { title } = require("process");
const { text } = require("express");
//const { readFromDataBase } = require("../routes/apiRoutes")
//const cors = require("cors");
//const dbJson = require("../../db/db.json");
const BASE_URL = "http://localhost:3000/api/notes";

//app.use(cors());

const getAllNotes = (req, res) => {
  
  res.json(data);
};

const saveNotes = (req, res) => {
  const { message } = req.body;
  const id = uuidv4();
  const newNotes = {
    title,
    text,
    id,
  }
  res.json(allNote);
};

const deleteNotes = (req, res) => {
  res.json({ message: "bye" });
};

const getNotesById = (req, res) => {
  const { id } = req.params;
  const allNote = readFromDatabase();
  res.json({ message: "Hello there" });
};

module.exports = { getAllNotes, saveNotes, deleteNotes, getNotesById };
