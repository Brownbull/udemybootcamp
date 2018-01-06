var Camp = require("../models/campground");
var Comment = require("../models/comment");
var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function (req, res, next) {
    if (req.isAuthenticated()) {
        Camp.findById(req.params.id, function (err, foundCamp) {
            if (err) {
                res.redirect("back");
            } else {
                if (foundCamp.author.id.equals(req.user._id)) {
                    next();
                }
                else {
                    res.redirect("back");
                } // eof if/else id compare
            } // eof if/else of Camp.findById
        }) // eof Camp.findById
    } else {
        res.redirect("back");
    } // eof if/else of router.get
} // eof checkCampgroundOwnership 

middlewareObj.checkCommentOwnership = function (req, res, next) {
    if (req.isAuthenticated()) {
        Comment.findById(req.params.comment_id, function (err, foundComment) {
            if (err) {
                res.redirect("back");
            } else {
                if (foundComment.author.id.equals(req.user._id)) {
                    next();
                }
                else {
                    res.redirect("back");
                } // eof if/else id compare
            } // eof if/else of Camp.findById
        }) // eof Camp.findById
    } else {
        res.redirect("back");
    } // eof if/else of router.get
} // eof checkCampgroundOwnership

middlewareObj.isLoggedIn = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
} // eof isLoggedIn

module.exports = middlewareObj;