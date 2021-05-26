const express = require("express");

const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

//const { htmlRouter, apiRouter } = require("./routes/delete");

const PORT = process.env.PORT || 3000;

const app = express();

//app.use(express.static("public"));

// Set up body parsing, static, and route middleware
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

const onSuccessfulOpen = () => {
  console.log(`Navigate to http://localhost:${PORT}`);
};

app.listen(PORT, onSuccessfulOpen);
