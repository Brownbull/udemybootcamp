var express     = require("express");
var app         = express();
var request     = require("request");
var bodyParser  = require("body-parser");
var mongoose    = require("mongoose");

// DB setup
mongoose.connect("mongodb://localhost/yelp_camp");

// Schema setup
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

var camp = mongoose.model("Campground", campgroundSchema);

// add a camp
// camp.create({
//   name: "Loni Logic",
//   image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"
// }, function(err, camp){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("new campground created");
//     console.log(camp);
//   }
// });

// var campgrounds = [
//   // {name: "Salmon Creek", image: "https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg"},
//   // {name: "Loni Logic", image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
//   // {name: "In the Middle", image: "https://farm5.staticflickr.com/4137/4812576807_8ba9255f38.jpg"}
// ];

// Setup public directory
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// GET - start
app.get("/", function(req, res){
  res.render("landing.ejs");
});

// INDEX
app.get("/campgrounds", function(req, res){
  // Get all campgrounds from DB
  camp.find({}, function(err, camps){
    if (err) {
      console.log(err);
    } else {
      res.render("index.ejs", {campgrounds: camps});
    }
  });
  // res.render("campgrounds.ejs", {campgrounds: campgrounds});
});

// NEW
app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");
});

// SHOW
app.get("/campgrounds/:id", function(req, res){
  // find camp with id
  camp.findById(req.params.id, function(err, foundCampground){
    if (err) {
      console.log(err);
    } else {
      res.render("show.ejs", {campground: foundCampground});
    }
  });
  // render template with that id
  // res.render("show.ejs");
});

// default - this must go at the end of all other routes
// app.get("*", function(req, res){
//   console.log("non routed route reached!");
//   res.send("non routed route reached");
// });
// GET - end

// POST - start
// CREATE
app.post("/campgrounds", function(req, res){
  // res.send("post req");
  var name = req.body.name;
  var image = req.body.image;
  var description = req.body.description;
  var newCampground = {name: name, image: image, description: description};
  // campgrounds.push(newCampground);
  // Crate new camp on DB
  camp.create(newCampground, function(err, newcamp){
    if (err) {
      console.log(err);
    } else {
      res.redirect("/campgrounds");
    }
  });
  // res.redirect("/campgrounds");
});
// POST - end

// LISTEN - start
app.listen(3000, 'localhost', function(req, res) {
  console.log("Server Started!");
});
// LISTEN - end
