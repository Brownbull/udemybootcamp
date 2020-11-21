var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

var Cat = mongoose.model("Cat", catSchema); // like a pointer on the table
// Adding an element to a DB - method 1
// var Kitty = new Cat({
//   name: "Tommy2",
//   age: 32,
//   temperament: "Mamon2"
// });
//
// Kitty.save(function(err, cat){
//   if(err){
//     console.log("something went wrong.");
//   } else {
//     console.log("following element saved.");
//     console.log(cat);
//   }
// });

// Adding an element to a DB - method 2
Cat.create({
  name: "Snow White",
  age: 17,
  temperament: "Bland"
}, function(err, cat){
  if (err) {
    console.log("something went wrong.");
    console.log(err);
  } else {
    console.log("following element saved.");
    console.log(cat);
  }
});

// Get all elements
Cat.find({}, function(err, cats){
  if (err) {
    console.log("something went wrong.");
    console.log(err);
  } else {
    console.log(cats);
  }
});
