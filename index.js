const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const port = 3000 || process.env.PORT;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.render("index");
  console.log("initialized");
});

app.get("/admin", function (req, res) {
  res.send("admin");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
