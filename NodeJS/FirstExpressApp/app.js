// console.log("our express app will go here");
var express = require("express");
var app = express();

// "/" Hi there
app.get("/", function(req, res){
  res.send("Hi there!");
});

// "/bye" Goodbye!
// "/dog" Hi Dog

// Tell Express to listen for request (Start server)
// c9
// app.listen(process.env.PORT, process.env.IP, function(){
// local
app.listen(3000, 'localhost', function(req, res) {
  console.log("Server Started!");
});




// http server
// var http = require('http');
// var server = http.createServer(app);
// app.get('/', function(req, res) {
//     res.send("Hello World!");
// });
// server.listen(3000, 'localhost');
// server.on('listening', function() {
//     console.log('Express server started on port %s at %s', server.address().port, server.address().address);
// });
