var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo_2");

// Models
var post = require("./models/post");
var user = require("./models/user");

// // POST - title, content
// var postSchema = new mongoose.Schema({
//   title: String,
//   content: String
// });
// var post = mongoose.model("Post", postSchema);

// USER - email, name
// var userSchema = new mongoose.Schema({
//   email: String,
//   name: String,
//   posts: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Post"
//   }]  // association with posts
// });
// var user = mongoose.model("User", userSchema);

// vars
// user.create({
//   email: "bob@gmail.com",
//   name: "bob something"
// });
// post.create({
//   title: "Title of post1",
//   content: "Content of post 1"
// },
// function(err, post){
//   user.findOne({email: "bob@gmail.com"}, function(err, foundUser){
//     if (err) {
//       console.log(err);
//     } else {
//       foundUser.posts.push(post);
//       foundUser.save(function(err, data){
//         if (err) {
//           console.log(err);
//         } else {
//           console.log(data);
//         }
//       })
//     }
//   })
// });


user.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
  if (err) {
    console.log(err);
  } else {
    console.log(user);
  }
})

//find
// user.findOne({name: "Hrmionie Granger"}, function(err, user){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });
