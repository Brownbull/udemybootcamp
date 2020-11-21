// LIBRARIES
var express               = require("express");
var mongoose              = require("mongoose");
var passport              = require("passport");
var bodyParser            = require("body-parser");
var localStrategy         = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");

// MODELS
var User = require('./models/user');

// SETUP
mongoose.connect("mongodb://localhost/auth_demo");
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(require("express-session")({
  secret: "Tommy is the mas pulentio",
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser()); // code session info
passport.deserializeUser(User.deserializeUser()); // decode session info

//=============
// ROUTES
//=============
app.get("/", function(req, res){
  res.render("home.ejs");
});

app.get("/secret", isLoggedIn, function(req, res){
  res.render("secret.ejs");
});

// AUTH ROUTES
// SHOW SIGN UP FORM
app.get("/register", function(req, res){
  res.render("register.ejs");
});
// HANDLING USER SIGN UP
app.post("/register", function(req, res){
  User.register(new User({username: req.body.username}), req.body.password, function(err, user){
    if (err) {
      console.log(err);
      return res.render("register.ejs");
    }
    passport.authenticate("local")(req, res, function(){
      res.redirect("/secret");
    }); // eof passport.authenticate(
  }); // eof User.register
}); // eof app.post

// LOGIN ROUTES
// SHOW LOGIN FORM
app.get("/login", function(req, res){
  res.render("login.ejs");
});
// LOGIN LOGIC
// middleware
app.post("/login",
  passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
  }),
  function(req, res){
});

// LOGOUT
app.get("/logout", function(req, res){
  req.logout();
  res.redirect('/');
});

// middleware
function isLoggedIn(req, res, next){
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

// LISTEN - start
app.listen(3000, 'localhost', function(req, res) {
  console.log("Server Started!");
});
// LISTEN - end
