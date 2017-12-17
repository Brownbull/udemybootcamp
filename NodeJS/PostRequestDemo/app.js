var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// Setup public directory
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// Global Vars
var friends = ["Claudia" , "Marcelo" , "Harry"];

// GET - start
app.get("/", function(req, res){
  res.render("home.ejs");
});

app.get("/friends", function(req, res){
  // var friends = ["Claudia" , "Marcelo" , "Harry"];
  res.render("friends.ejs", {friends: friends});
});

// default - this must go at the end of all other routes
app.get("*", function(req, res){
  console.log("non routed route reached!");
  res.send("non routed route reached");
});
// GET - end

// POST - start
app.post("/addfriend", function(req, res){
  // console.log(req.body);
  var newfriend = req.body.newfriend;
  friends.push(newfriend);
  res.redirect("/friends");
});
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
