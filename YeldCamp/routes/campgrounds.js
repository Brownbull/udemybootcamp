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
router.get("/new", isLoggedIn, function(req, res){
  res.render("campgrounds/new.ejs");
});

// CREATE
router.post("/", isLoggedIn, function(req, res){
  // res.send("post req");
  var name = req.body.name;
  var image = req.body.image;
  var description = req.body.description;
  var author = {
    id: req.user._id,
    username: req.user.username
  }
  var newCampground = {name: name, image: image, description: description, author: author};
  // Crate new camp on DB
  Camp.create(newCampground, function(err, newcamp){
    if (err) {
      console.log(err);
    } else {
      res.redirect("/campgrounds");
    }
  });
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

// EDIT
router.get("/:id/edit", checkCampgroundOwnership, function(req, res){
  Camp.findById(req.params.id, function(err, foundCamp){
    res.render("campgrounds/edit.ejs", {campground: foundCamp});
  }); // eof Camp.findById
}); // eof router.get

// UPDATE
router.put("/:id", checkCampgroundOwnership, function(req, res){
  // sanitize input to delete script or malicius code
  // req.body.campground.description = req.sanitize(req.body.campground.description);
  Camp.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCamp){
    if(err){
      console.log(err);
      res.redirect("/campgrounds");
    } else {
      res.redirect("/campgrounds/" + req.params.id);
    }
  });
});

// DESTROY
router.delete("/:id", checkCampgroundOwnership, function(req, res){
  Camp.findByIdAndRemove(req.params.id, function(err){
    if(err){
      console.log(err);
      res.redirect("/campgrounds");
    } else {
      res.redirect("/campgrounds");
    }
  })
});

// ===========================
// MIDDLEWARE
// ===========================
function isLoggedIn(req, res, next){
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
} // eof isLoggedIn

function checkCampgroundOwnership(req, res, next){
  if (req.isAuthenticated()) {
    Camp.findById(req.params.id, function(err, foundCamp){
      if(err){
        res.redirect("back");
      } else {
        if (foundCamp.author.id.equals(req.user._id)){
          next();
        }
        else {
          res.redirect("back");
        } // eof if/else id compare
      } // eof if/else of Camp.findById
    }) // eof Camp.findById
  } else {
    res.redirect("back");
  } // eof if/else of router.get
} // eof checkCampgroundOwnership



module.exports = router;
