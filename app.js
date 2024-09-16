const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const ejsMate = require("ejs-mate");

const mongoose = require("mongoose");
const Plant = require("./models/plant");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecoherb_atlas");
}

main()
  .then(() => {
    console.log("Connected To Db");
  })
  .catch((err) => console.log(err));

app.engine("ejs", ejsMate);

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/garden", async (req, res) => {
  let featuredPlants = await Plant.find({ featured: true });
  res.render("garden/hero.ejs", { featuredPlants });
});

app.get("/garden/plants", async (req, res) => {
  let plants = await Plant.find({});
  res.render("garden/plants.ejs", { plants });
});

app.get("/garden/plants/:id", async (req, res) => {
  let plantID = req.params;
  let plant = await Plant.findById(plantID.id);
  res.render("garden/show.ejs", { plant });
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
