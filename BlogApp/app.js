var express         = require("express");
var app             = express();
var request         = require("request");
var bodyParser      = require("body-parser");
var mongoose        = require("mongoose");
var methodOverride  = require("method-override");
var expressSanitizer= require("express-sanitizer");

// App config
mongoose.connect("mongodb://localhost/blogapp");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method')); // able to use ?_method=put on update form
app.use(expressSanitizer());

// Schema setup
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default: Date.now}
});

// mongoose - model config
var blog = mongoose.model("Blog", blogSchema);

// create a test element on Blog table
// blog.create({
//   title: "Test Blog",
//   image: "https://farm4.staticflickr.com/3016/2798692087_c61bc362f1.jpg",
//   body: "a palce where to be",
// created: {type: Date, default: Date.now}
// });

// RESTful Routes
// Index   /dogs           GET
app.get("/", function(err, res){
  res.redirect('/blogs');
});
app.get("/blogs", function(req, res){
  blog.find({}, function(err, blogs){
    if(err){
      console.log(err);
    } else {
      res.render("index.ejs", {blogs: blogs });
    }
  });
});
// New     /dogs/new       GET
app.get("/blogs/new", function(err, res){
  res.render("new.ejs");
});
// Create  /dogs           POST
app.post("/blogs", function(req, res){
  // create blog
  // sanitize input to delete script or malicius code
  req.body.blog.body = req.sanitize(req.body.blog.body);
  blog.create(req.body.blog, function(err, newBlog){
    if(err){
      console.log(err);
    } else {
      // redirect
      res.redirect("/blogs");
    }
  });
});
// Show    /dogs/:id       GET
app.get("/blogs/:id", function(req, res){
  blog.findById(req.params.id, function(err, foundBlog){
    if(err){
      console.log(err);
      res.redirect("/blogs");
    } else {
      // redirect
      res.render("show.ejs", {blog: foundBlog});
    }
  });
});
// Edit    /dogs/:id/edit  GET
app.get("/blogs/:id/edit", function(req, res){
  blog.findById(req.params.id, function(err, foundBlog){
    if(err){
      console.log(err);
      res.redirect("/blogs");
    } else {
      // redirect
      res.render("edit.ejs", {blog: foundBlog});
    }
  });

});
// Update  /dogs/:id       PUT
app.put("/blogs/:id", function(req, res){
  // sanitize input to delete script or malicius code
  req.body.blog.body = req.sanitize(req.body.blog.body);
  blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
    if(err){
      console.log(err);
      res.redirect("/blogs");
    } else {
      res.redirect("/blogs/" + req.params.id);
    }
  });
});
// Destroy /dogs/:id       DELETE
app.delete("/blogs/:id", function(req, res){
  // destroy blog
  blog.findByIdAndRemove(req.params.id, function(err){
    if(err){
      console.log(err);
      res.redirect("/blogs");
    } else {
      res.redirect("/blogs");
    }
  })
});


// LISTEN - start
// Tell Express to listen for request (Start server)
// c9
// app.listen(process.env.PORT, process.env.IP, function(){
// local
app.listen(3000, 'localhost', function(req, res) {
  console.log("Server Started!");
});
// LISTEN - end
