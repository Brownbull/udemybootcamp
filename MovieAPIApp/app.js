var express = require("express");
var app = express();
var request = require("request");

var asdarr = [];

// Setup public directory
app.use(express.static("public"));

// GET - start
// "/" Hi there
app.get("/", function(req, res){
  res.render("search.ejs");
});

// "/" Results for movie API
app.get("/results", function(req, res){
  var query = req.query.search;
  var url = "http://www.omdbapi.com/?apikey=thewdb&s=" + query;
  // res.send(url);
  request(url, function(error, response, body){
    if(!error && response.statusCode == 200){
      var data = JSON.parse(body);
      res.render("results.ejs", {data: data});
    }
  });
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
