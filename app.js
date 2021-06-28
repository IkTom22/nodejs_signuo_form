const express = require("express");
const app = express();
const port = 5000;

//Set Template engine
app.set("view engine", "ejs");

//Navigation
app.get("", (req, res) => {
  res.render("index");
});
app.get("/register", (req, res) => {
  res.render("register");
});
app.listen(port, () => console.log(`App listening on port ${port}`));
