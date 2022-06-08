const express = require("express");
const fetch = require("node-fetch");
const path = require("path");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
var public = path.join(__dirname, "public");
app.get("/", function (req, res) {
  res.sendFile(path.join(public, "index.html"));
});

app.get("/getdata", (req, res) => {
  fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${process.env.PLAYLIST_ID}&key=${process.env.MY_API_KEY}`
  )
    .then((res) => res.json())
    .then((json) => {
      //console.log(json);
      res.send(json);
    });
});

app.get("/getdata/:id", (req, res) => {
  fetch(
    `https://www.googleapis.com/youtube/v3/videos?id=${req.params.id}&key=${process.env.MY_API_KEY}&part=snippet,contentDetails,statistics,status`
  )
    .then((details) => details.json())
    .then((json) => {
      //console.log(json);
      res.send(json);
    });
});

app.use(express.static("public"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
