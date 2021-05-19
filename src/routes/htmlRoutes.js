const { Router } = require("express");

const {
  renderIndexPage,
  renderNotesPage,
} = require("../controllers/htmlControllers");

const htmlRouter = Router();

htmlRouter.get("/notes", renderNotesPage);
htmlRouter.get("*", renderIndexPage);

module.exports = htmlRouter;
