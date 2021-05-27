const { v4: uuidv4 } = require("uuid");
const path = require("path");

const fs = require("fs");
const database = require("../../db/db.json");

//const cors = require("cors");
const BASE_URL = "http://localhost:3000/api/notes";

//app.use(cors());

const getAllNotes = (req, res) => {
  res.json(database);
};

const saveNotes = (req, res) => {
  const { message} = req.body;
  //console.log(req.body)
  const id = uuidv4();
  const newNotes = {
    title,
    text,
    id,
  };
  database.push(newNotes);
  fs.writeFile("../../db/db.json", JSON.stringify(database), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    //file written successfully
  });
  res.json(database);
};

const deleteNotes = (req, res) => {
  res.json({ message: "bye" });
};

const getNotesById = (req, res) => {
  const { id } = req.params;

  res.json({ message: "Hello there" });
};

module.exports = { getAllNotes, saveNotes, deleteNotes, getNotesById };
