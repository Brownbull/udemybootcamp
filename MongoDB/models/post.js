var mongoose = require("mongoose");

// POST - title, content
var postSchema = new mongoose.Schema({
  title: String,
  content: String
});
// var post = mongoose.model("Post", postSchema);
module.exports = mongoose.model("Post", postSchema);
