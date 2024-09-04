const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const ejsMate = require("ejs-mate");
const { dir } = require("console");

app.engine("ejs", ejsMate);

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/garden", (req, res) => {
  res.render("garden/hero.ejs");
});

app.get("/user/login", (req, res) => {
  res.render("user/login.ejs");
});

app.get("/user/signup", (req, res) => {
  res.render("user/signup.ejs");
});

app.get("*", (req, res) => {
  res.send("Not found");
});

app.listen(port, () => {
  console.log(`app is listening to port ${port}`);
});
