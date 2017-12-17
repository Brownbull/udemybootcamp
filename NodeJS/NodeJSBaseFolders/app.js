var express = require("express");
var app = express();

var asdarr = [];

// Setup public directory
app.use(express.static("public"));

// GET - start
// "/" Hi there
app.get("/", function(req, res){
  res.render("home.ejs");
});

// default - this must go at the end of all other routes
app.get("*", function(req, res){
  console.log("non routed route reached!");
  res.send("non routed route reached");
});
// GET - end

// POST - start
app.post("/addasd", function(req, res){
  // console.log(req.body);
  var asd = req.body.asd;
  asdarr.push(asd);
  res.redirect("/asd");
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
