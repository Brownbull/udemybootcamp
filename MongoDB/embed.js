var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo");

// POST - title, content
var postSchema = new mongoose.Schema({
  title: String,
  content: String
});
var post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema]  // association with posts
});
var user = mongoose.model("User", userSchema);

// vars
// var newUser = new user({
//   email : "hermione@hogwarts.edu",
//   name: "Hrmionie Granger"
// });
//
// newUser.posts.push({
//   title: "How to bre asdasda",
//   content: "Nothing at all this content"
// });
//
// newUser.save(function(err, user){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });
// var newPost = new post({
//   title: "Reflections on Apples",
//   content: "They are not good"
// });
// newPost.save(function(err, user){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(newPost);
//   }
// });

user.findOne({name: "Hrmionie Granger"}, function(err, user){
  if (err) {
    console.log(err);
  } else {
    console.log(user);
  }
});
