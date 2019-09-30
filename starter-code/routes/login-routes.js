// routes/auth-routes.js
const express = require("express");
const loginRoutes = express.Router();
const passport = require("passport");
const Blog = require("../models/Blog");
const Category = require("../models/Category");

// User model
const User = require("../models/user");


// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const ensureLogin = require("connect-ensure-login");

loginRoutes.get("/create", (req, res, next) => {
  res.render("auth/createact", { "message": req.flash("error") });
});


loginRoutes.get("/viewblog/:id", (req, res, next) => {

  Blog.findById(req.params.id)
  .then(blog => { 
   
    
    Category.find()
    .then(categories => {
      res.render("auth/viewblog", {loggedUser:req.user,blog,categories});
    })
    .catch(error => {
     console.log('Error while getting the categories from the DB: ', error);
    })
    
   })
   .catch(error => {
    console.log('Error while getting the blog from the DB: ', error);
   })
 
});


loginRoutes.get("/create", (req, res, next) => {
  res.render("auth/createact", { "message": req.flash("error") });
});

loginRoutes.post("/createPost", (req, res, next) => {
  const username = req.body.username;
  const fullName = req.body.fullName;
  const password = req.body.password;
  const role = "Admin";

  if (username === "" || password === "" || role === "") {
    res.render("auth/signup", { message: "Indicate username , password and role" });
    return;
  }


  const salt = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);

  const newUser = new User({
    username,
    fullName,
    password: hashPass,
    role
  });

  newUser.save((err) => {
    if (err) {
      res.render("/auth/createact", { message: "Something went wrong" });
    } else {
      res.redirect("/login");;
    }
  });

});
  


module.exports = loginRoutes;