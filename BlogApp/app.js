var express     = require("express");
var app         = express();
var request     = require("request");
var bodyParser  = require("body-parser");
var mongoose    = require("mongoose");

// DB setup
mongoose.connect("mongodb://localhost/blogapp");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
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
// Edit    /dogs/:id/edit  GET
// Update  /dogs/:id       PUT
// Destroy /dogs/:id       DELETE

// GET - start
// "/" Hi there
// app.get("/", function(req, res){
//   res.render("home.ejs");
// });
//
// // default - this must go at the end of all other routes
// app.get("*", function(req, res){
//   console.log("non routed route reached!");
//   res.send("non routed route reached");
// });
// // GET - end
//
// // POST - start
// app.post("/addasd", function(req, res){
//   // console.log(req.body);
//   var asd = req.body.asd;
//   asdarr.push(asd);
//   res.redirect("/asd");
// });
// POST - end

// LISTEN - start
// Tell Express to listen for request (Start server)
// c9
// app.listen(process.env.PORT, process.env.IP, function(){
// local
app.listen(3000, 'localhost', function(req, res) {
  console.log("Server Started!");
});
// LISTEN - end
