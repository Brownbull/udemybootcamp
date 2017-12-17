// console.log("our express app will go here");
var express = require("express");
var app = express();

// GET - start
// "/" Hi there
app.get("/", function(req, res){
  res.send("Hi there!");
});
// "/bye" Goodbye!
app.get("/bye", function(req, res){
  res.send("Good Bye!");
});
// "/dog" Hi Dog
app.get("/dog", function(req, res){
  console.log("dog request made");
  res.send("guau guau!");
});

// patterns on urls :var1/:var2/:var3
app.get("/dog/:dogtype", function(req, res){
  var type = req.params.dogtype;
  // console.log(req.params);
  res.send("you are at dog type: " + type.toUpperCase());
});

app.get("/speak/:animal", function(req, res){
  if(req.params.animal == 'pig'){
    res.send("The " + req.params.animal + " says \'Oink\'")
  }
  else if(req.params.animal == 'cow'){
    res.send("The " + req.params.animal + " says \'Moo\'")
  }
  else if(req.params.animal == 'dog'){
    res.send("The " + req.params.animal + " says \'Woof Woof!\'")
  }
  else{
    res.send("The " + req.params.animal + " was not found!")
  }
});

app.get("/repeat/:word/:times", function(req, res){
  var str = '';
  for(var i = 0; i < req.params.times; i++){
    str = str + req.params.word + ' ';
  }
  res.send(str);
});

// default - this must go at the end of all other routes
app.get("*", function(req, res){
  console.log("non routed route reached!");
  res.send("non routed route reached");
});
// GET - end

// LISTEN - start
// Tell Express to listen for request (Start server)
// c9
// app.listen(process.env.PORT, process.env.IP, function(){
// local
app.listen(3000, 'localhost', function(req, res) {
  console.log("Server Started!");
});
// LISTEN - end



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
