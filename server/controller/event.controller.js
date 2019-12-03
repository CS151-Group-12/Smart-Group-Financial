import express from 'express';

const eventController = express.Router();

/**
 * GET/
 * Get ALL events in the DB
 */
eventController.get('/', (req, res) => {
  db.query('SELECT * from Event', (err, data) => {
    if (err) {
      console.log('Error while performing Query.' + err);
    } else {
      const returnData = { ...data };
      res.status(200).json(returnData);
    }
  });
});

/**
 * Get List of Events by user ID
 */
eventController.get('/user/:userID', (req, res) => {
  const query = `SELECT eventID, name, startDate, endDate, email FROM Event
      JOIN User_Join_Event USING(eventID)
      JOIN (SELECT userID, email from User WHERE userID LIKE ${req.params.userID}) userTable USING (userID);`;

  db.query(query, (err, data) => {
    if (err) {
      console.log('Error while performing Query.' + err);
    } else {
      const returnData = { ...data };

      res.status(200).json(data);
    }
  });
});

eventController.get('/:eventID', (req, res) => {
  const query = `SELECT email, category, amount
  FROM User_Contribute_Event
  JOIN User USING(userID)
  WHERE eventID = ${req.params.eventID};`;

  db.query(query, (err, data) => {
    if (err) {
      console.log('Error while performing Query.' + err);
    } else {
      const returnData = { ...data };
      console.log(...data);
      res.status(200).json(data);
    }
  });
});

/**
 * POST/
 * User creates an event:
 * 1. Add a new event to DB
 * 2. Connect userID & eventID to Owner_Create_Event
 */
eventController.post('/', (req, res) => {
  const { name, startDate, endDate, userID } = req.body;

  // Create An Event Query
  const createEventQuery = `INSERT INTO Event(name, startDate, endDate) VALUES ('${name}', '${startDate}','${endDate}')`;

  db.query(createEventQuery, (createEventErr, createdEvent, eventFields) => {
    if (createEventErr) return res.status(500).json(createEventErr);
    else if (createdEvent.length == 0)
      return res.status(500).json({ data: 'Create Event fail' });

    // Add User and Event into Owner_Create_Event
    const ownerCreateEvent = `INSERT INTO User_Create_Event VALUES('${userID}', ${createdEvent.insertId})`;

    db.query(ownerCreateEvent, (ownerCreateEventErr, data, ownerFields) => {
      if (ownerCreateEventErr) return res.status(500).json(ownerCreateEventErr);
      else if (data.length == 0)
        return res.status(500).json({ data: 'Owner_Create_Event failed' });
      return res.status(200).json({ data });
    });
  });
});

/**
 * POST/
 * User Join an Event By Name
 */
eventController.post('/join', (req, res) => {
  const { userID, name } = req.body;
  const getEventByNameQuery = `SELECT eventID FROM Event WHERE name like '${name}'`;
  db.query(getEventByNameQuery, (getEventErr, foundEvent) => {
    if (getEventErr) return res.status(500).json(getEventErr);
    else if (foundEvent.length == 0)
      return res
        .status(404)
        .json({ message: `Event Name ${name} doesn't exist` });
    else {
      const joinEventQuery = `INSERT INTO User_Join_Event VALUES('${userID}', '${foundEvent[0].eventID}')`;
      db.query(joinEventQuery, (joinEventErr, data) => {
        if (joinEventErr) res.status(500).json(joinEventErr);
        else res.status(200).json({ data });
      });
    }
  });
});

/**
 * POST/
 * Add new category to the event
 */

eventController.post('/:eventID/contribute/', (req, res) => {
  const { userID, name, moneyAmount } = req.body;
  const addNewCategory = `INSERT INTO User_Contribute_Event VALUES('${req.params.eventID}', '${userID}', '${name}','${moneyAmount}')`;

  db.query(addNewCategory, (addNewCategoryErr, data) => {
    if (addNewCategoryErr) res.status(500).json(addNewCategoryErr);
    else res.status(200).json({ data });
  });
});

eventController.post('/:eventID/calculate', (req, res) => {
  const { total, average } = req.body;

  const getUserTotalAmount = `SELECT userID, SUM(amount) as "total"
      FROM User_Contribute_Event 
      GROUP BY userID;`;

  db.query(getUserTotalAmount, (err, data, fields) => {
    if (err) res.status(500).json({ err: err });
    else {
      let receipientList = [];
      let payeeList = [];

      // Get a list to know who needs to pay
      for (let i = 0; i < data.length; i++) {
        let diff = data[i].total - average;
        data[i].diff = diff;
        if (diff > 0) {
          receipientList.push(data[i]);
        } else if (diff < 0) {
          payeeList.push(data[i]);
        }
      }

      for (let i = 0; i < receipientList.length; i++) {
        for (let j = 0; j < payeeList.length; j++) {
          const receipientDiff = receipientList[i].diff;
          const payeeDiff = payeeList[i].diff;
          let moneyLeft = receipientDiff + payeeDiff;
          if (payeeDiff !== 'DONE') {
            if (moneyLeft >= 0) {
              const userOwesUser = `INSERT INTO User_Owes_User Values(
                '${receipientList[i].userID}', 
                '${payeeList[j].userID}', 
                '${req.params.eventID}',
                '${Math.abs(payeeDiff)}'
                )`;
              payeeList[j].diff = 'DONE';
              db.query(userOwesUser, (err1, data) => {
                if (err1) res.status(500).json({ userOwesUserErr: err1 });
                else console.log('message: ' + data);
              });
            } else {
              continue;
            }
          } else {
            continue;
          }
          receipientList[i].diff = moneyLeft;
        }
      }

      const getAllUserOwesUserQuery = `SELECT * FROM User_Owes_User;`;
      db.query(getAllUserOwesUserQuery, (err2, userOwesUserList) => {
        if (err2) res.status(500).json({ userOwesUserErr2: err2 });
        else res.status(200).json({ data: userOwesUserList });
      });
    }
  });
});

export default eventController;
