const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

let initDogs = require("./dogs.json");
app.get("/dogs", (req, res) => {
  res.json(initDogs);
});

let initCats = require("./cats.json");
app.get("/cats", (req, res) => {
  res.json(initCats);
});
