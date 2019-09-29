// routes/auth-routes.js
const express = require("express");
const loginRoutes = express.Router();
const passport = require("passport");

// User model
const User = require("../models/user");


// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const ensureLogin = require("connect-ensure-login");

loginRoutes.get("/create", (req, res, next) => {
  res.render("auth/createact", { "message": req.flash("error") });
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