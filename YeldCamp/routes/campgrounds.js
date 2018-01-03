var express = require("express");
var router  = express.Router();
var Camp = require("../models/campground");

//=============
// CAMPGROUND ROUTES
//=============
// INDEX
router.get("/", function(req, res){
  Camp.find({}, function(err, camps){
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds/index.ejs", {campgrounds: camps});
    } // oef if/else of Camp.find
  }); //eof Camp.find
}); // eof apt.get

// NEW
router.get("/new", function(req, res){
  res.render("campgrounds/new.ejs");
});

// SHOW
router.get("/:id", function(req, res){
  // find camp with id
  Camp.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
    if (err) {
      console.log(err);
    } else {
      // console.log(foundCampground);
      res.render("campgrounds/show.ejs", {campground: foundCampground});
    } //eof if/else of Camp.findById
  }) // eof Camp.findById
}); // eof router.get

// CREATE
router.post("/", function(req, res){
  // res.send("post req");
  var name = req.body.name;
  var image = req.body.image;
  var description = req.body.description;
  var newCampground = {name: name, image: image, description: description};
  // campgrounds.push(newCampground);
  // Crate new camp on DB
  Camp.create(newCampground, function(err, newcamp){
    if (err) {
      console.log(err);
    } else {
      res.redirect("/campgrounds");
    }
  });
});

module.exports = router;
