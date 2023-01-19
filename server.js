const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 3001;
const publicDir = path.join(__dirname, "/public");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/notes", function (req, res) {
    res.sendFile(path.join(publicDir, "notes.html"));
  });

  app.get("/api/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/db/db.json"));
  });
  
  app.get("/api/notes/:id", function (req, res) {
    let myNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    res.json(myNotes[Number(req.params.id)]);
  });

  app.get("/api/notes/:id", function (req, res) {
    let myNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    res.json(myNotes[Number(req.params.id)]);
  });

  app.get("*", function (req, res) {
    res.sendFile(path.join(publicDir, "index.html"));
  });

  app.listen(port, function () {
    console.log(`Server listening on port ${port}. );
  }); 

  


