var express = require("express");
var app = express();
var request = require("request");
var bodyParser = require("body-parser");

var campgrounds = [
  // {name: "Salmon Creek", image: "https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg"},
  // {name: "Loni Logic", image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
  // {name: "In the Middle", image: "https://farm5.staticflickr.com/4137/4812576807_8ba9255f38.jpg"}
];

// Setup public directory
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// GET - start
app.get("/", function(req, res){
  res.render("landing.ejs");
});

app.get("/campgrounds", function(req, res){
  res.render("campgrounds.ejs", {campgrounds: campgrounds});
});

app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");
});

// default - this must go at the end of all other routes
// app.get("*", function(req, res){
//   console.log("non routed route reached!");
//   res.send("non routed route reached");
// });
// GET - end

// POST - start
app.post("/campgrounds", function(req, res){
  // res.send("post req");
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  campgrounds.push(newCampground);
  res.redirect("/campgrounds");
});
// POST - end

// LISTEN - start
app.listen(3000, 'localhost', function(req, res) {
  console.log("Server Started!");
});
// LISTEN - end
