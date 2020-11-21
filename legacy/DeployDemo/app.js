var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.render("home.ejs")
});

app.get("/about", function(req, res){
res.render("about.ejs")
});

// LISTEN - start
app.listen(process.env.PORT, process.env.IP, function (req, res) {
// app.listen(3000, 'localhost', function (req, res) {
    console.log("Server Started!");
});
// LISTEN - end
