
const express = require("express");

const { htmlRouter, apiRouter } = require("./routes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));
app.use("/api", apiRouter);
app.use("/", htmlRouter);

const onSuccessfulOpen = () => {
  console.log(`listening on http://localhost:${PORT}`);
};

app.listen(PORT, onSuccessfulOpen);
