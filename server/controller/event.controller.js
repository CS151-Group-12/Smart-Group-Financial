import express from "express";

const eventController = express.Router();

/**
 * GET/
 * Get ALL events in the DB
 */
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

/**
 * POST/
 * User creates an event:
 * 1. Add a new event to DB
 * 2. Connect userID & eventID to Owner_Create_Event
 */
eventController.post("/", (req, res) => {
  const { name, startDate, endDate, userID } = req.body;

  // Create An Event Query
  const createEventQuery = `INSERT INTO Event(name, startDate, endDate) VALUES ('${name}', '${startDate}','${endDate}')`;

  db.query(createEventQuery, (createEventErr, createdEvent, eventFields) => {
    if (createEventErr) return res.status(500).json(createEventErr);
    else if (createdEvent.length == 0)
      return res.status(500).json({ data: "Create Event fail" });

    // Add User and Event into Owner_Create_Event
    const ownerCreateEvent = `INSERT INTO User_Create_Event VALUES('${userID}', ${createdEvent.insertId})`;

    db.query(ownerCreateEvent, (ownerCreateEventErr, data, ownerFields) => {
      if (ownerCreateEventErr) return res.status(500).json(ownerCreateEventErr);
      else if (data.length == 0)
        return res.status(500).json({ data: "Owner_Create_Event failed" });
      return res.status(200).json({ data });
    });
  });
});

/**
 * POST/
 * User Join an Event By Name
 */
eventController.post("/join", (req, res) => {
  const { userID, name } = req.body;

  const getEventByNameQuery = `SELECT id FROM Event WHERE name like '${name}'`;

  db.query(getEventByNameQuery, (getEventErr, foundEvent) => {
    if (getEventErr) return res.status(500).json(getEventErr);
    else if (foundEvent.length == 0)
      return res
        .status(404)
        .json({ message: `Event Name ${name} doesn't exist` });
    else {
      const joinEventQuery = `INSERT INTO User_Join_Event VALUES('${userID}', '${foundEvent[0].id}')`;
      db.query(joinEventQuery, (joinEventErr, data) => {
        if (joinEventErr) res.status(500).json(joinEventErr);
        else res.status(200).json({ data });
      });
    }
  });
});

export default eventController;