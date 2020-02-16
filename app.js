var express = require("express"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  elements = require("./models/elements");

var app = express();
path = require("path");
app.use("/public", express.static("public"));
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/cms", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(
  require("express-session")({
    secret: "dis work distro",
    resave: false,
    saveUninitialized: false
  })
);

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("homepage");
});

app.get("/CMS", function (req, res) {
  res.render("cmsportal");
});

// app.post("/CMS", function (req, res) {
//   var new__element = new elements({
//     page: "homepage", //doc data
//     element_text: "Welcome to ABC Technological University Website",
//     tag_type: "p",
//     div_class: "text",
//     div_id: "homepage-welcome",
//     document_name: "How to use ShareDocs? An Introduction"
//   });
//   new__element.save(function (err) {
//     var new__element = new elements({
//       div_id: new__element._id,
//       // user_id: req.body.username,
//       tag_type: new__element.document_name
//       // date:Date.now,
//     });
//   });
// });

app.post("/CMS", function (req, res) {
  res.send("Website updated successfully");
});

app.get("/link1", function (req, res) {
  res.render("Link1");
});

app.get("/link2", function (req, res) {
  res.render("Link2");
});

app.get("/link3", function (req, res) {
  res.render("Link3");
});

app.get("/link4", function (req, res) {
  res.render("Link4");
});

app.get("/link5", function (req, res) {
  res.render("Link5");
});

app.get("/link6", function (req, res) {
  res.render("Link6");
});

app.get("/link7", function (req, res) {
  res.render("Link7");
});

app.listen(4000);