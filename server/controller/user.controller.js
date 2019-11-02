import express from "express";
import bcrypt from "bcrypt";

import passport from "passport";
const userController = express.Router();

userController.get("/", (req, res) => {
  db.query("SELECT * from User", (err, data, fields) => {
    if (err) {
      console.log("Error while performing Query." + err);
    } else {
      const returnData = { ...data };
      res.status(200).json(returnData);
    }
  });
});

userController.post("/", (req, res) => {
  res.status(200).json({ data: "" });
});

userController.post("/register", (req, res) => {
  const { email, password } = req.body;
  
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    const createUserQuery = `insert into User(email, password) values('${email}', '${hashedPassword}')`;
    db.query(createUserQuery, (err2, createdUser) => {
      if (err2) res.status(500).json(err2);
      else res.status(200).json({ createdUser });
    });
  });
});

userController.get("/login-failed", (req, res) => {
  res.status(403).json({ message: "USer enter wrong password" });
});

userController.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login-failed"
  }),
  (req, res) => {
    if (req.body.remember) {
      req.session.cookie.maxAge = 1000 * 60 * 3;
    } else {
      req.session.cookie.expires = false;
    }
    res.redirect("/");
  }
);

export default userController;
