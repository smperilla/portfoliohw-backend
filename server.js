const express = require('express');
const cors = require('cors');

const projects = require('./projects.json');
const about = require('./about.json');

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/projects", (req, res) => {
  res.json(projects);
});

app.get("/about", (req, res) => {
  res.json(about);
});

const PORT = 4000;

app.listen(PORT,() => console.log(`Server running on port ${PORT}`));