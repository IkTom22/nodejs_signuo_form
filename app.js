const express = require("express");
const { check, validationResult } = require("express-validator");
const app = express();
const port = 5000;

//Set Template engine
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//Navigation
app.get("", (req, res) => {
  res.render("index");
});
app.get("/register", (req, res) => {
  res.render("register");
});

app.post(
  "/register",
  [check("username", "This username must be 3+ characters long").exists()],
  (req, res) => {
    res.json(req.body);
  }
);
app.listen(port, () => console.log(`App listening on port ${port}`));
