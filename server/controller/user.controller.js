import express from "express";
import bcrypt from "bcrypt";

import passport from "passport";
const userController = express.Router();

function getUserByEmailQuery(email) {
  return `SELECT userID, email from User WHERE email LIKE '${email}'`;
}

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
  db.query(getUserByEmailQuery(email), (err, foundEmail, fields2) => {
    if (err) res.status(500).json(err);
    else {
      if (foundEmail.length > 0) {
        res.status(400).json({ message: "Email already existed" });
      } else {
        bcrypt.hash(password, 10, (err, hashedPassword) => {
          const createUserQuery = `INSERT into User(email, password) values('${email}', '${hashedPassword}')`;
          db.query(createUserQuery, (err2, createdUser, fields1) => {
            if (err2) res.status(500).json(err2);
            else {
              db.query(
                getUserByEmailQuery(email),
                (err3, userDatas, fields2) => {
                  if (err3) res.status(500).json(err3);
                  res.status(200).json({ ...userDatas[0] });
                }
              );
            }
          });
        });
      }
    }
  });
});

userController.get("/login-failed", (req, res) => {
  res.status(403).json({ message: "User enter wrong password" });
});

userController.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login-failed"
  }),
  (req, res) => {
    const { email } = req.body;
    db.query(getUserByEmailQuery(email), (err2, foundUser) => {
      if (err2) res.status(500).json(err2);
      else {
        const getEventQuery = `SELECT eventID, name, startDate, endDate, email FROM Event
      JOIN User_Join_Event USING(eventID)
      JOIN (SELECT userID, email from User WHERE userID LIKE ${foundUser[0].userID}) userTable USING (userID);`;

        db.query(getEventQuery, (err, eventList) => {
          if (err) {
            console.log("Error while performing Query." + err);
          } else {
            const eventData = [...eventList];
            const query = `SELECT partyID, name, email FROM Party
                  JOIN User_Join_Party USING(partyID)
                  JOIN (SELECT userID, email from User WHERE userID LIKE ${foundUser[0].userID}) userTable USING(userID);`;

            db.query(query, (err, data) => {
              if (err) {
                console.log("Error while performing Query." + err);
              } else {
                const returnData = [...data];
                console.log();
                res
                  .status(200)
                  .json({
                    ...foundUser[0],
                    eventList: eventData,
                    partyList: returnData
                  });
              }
            });
          }
        });
      }
    });
  }
);

export default userController;
