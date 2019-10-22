import express from "express";

const eventController = express.Router();

eventController.get("/", (req, res) => {
  db.query("SELECT * from Event", (err, data) => {
    if (err) {
      console.log("Error while performing Query." + err);
    } else {
      const returnData = { ...data };
      res.status(200).json(returnData);
    }
  });
});

eventController.post("/", (req, res) => {
  const { name, startDate, endDate } = req.body;
  const createEventQuery = `INSERT INTO Event(name, startDate, endDate) VALUES ('${name}', '${startDate}','${endDate}')`;

  const getUserID = `select id from User where email like '${req.body.email}'`;

  db.query(getUserID, (err1, foundUser) => {
    if (err1) res.status(500).json(err1);
    else {
      db.query(createEventQuery, (err, createdEvent) => {
        if (err) res.status(500).json(err);
        else {
          const ownerCreateEvent = `insert into Owner_Create_Event values('${foundUser[0].id}', ${createdEvent.insertId})`;

          db.query(ownerCreateEvent, (err3, data) => {
            if (err3) res.status(500).json(err3);
            else res.status(200).json({ data });
          });
        }
      });
    }
  });
});

export default eventController;
