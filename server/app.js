var express = require("express");
var app = express();
var router = require("express").Router();
const fetch = require("node-fetch");

var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(require("./middleware/headers"));

app.get("/:id/:id2", async (req, res) => {
  const APIKEY = "ecb091da2ca6adfa8393189bbf3fe259";
  //   const apiURL = `https://api.darksky.net/forecast/${APIKEY}/39.727167,-85.9917437`;

  const apiURL = `https://api.darksky.net/forecast/${APIKEY}/${req.params.id},${req.params.id2}`;
  const fetch_response = await fetch(apiURL);
  const json = await fetch_response.json();
  res.json(json);
});

app.listen(3000, function() {
  console.log("App is listening on 3000.");
});
