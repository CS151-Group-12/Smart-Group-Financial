import express from 'express';

const eventController = express.Router();

function getEventDetail(res, eventID) {
  const query = `SELECT email, category, amount
  FROM User_Contribute_Event
  JOIN User USING(userID)
  WHERE eventID = ${eventID};`;

  db.query(query, (err, data) => {
    if (err) {
      console.log('Error while performing Query.' + err);
    } else {
      const returnData = [...data];
      res.status(200).json(returnData);
    }
  });
}
/**
 * GET/
 * Get ALL events in the DB
 */
eventController.get('/', (req, res) => {
  db.query('SELECT * from Event', (err, data) => {
    if (err) {
      console.log('Error while performing Query.' + err);
    } else {
      const returnData = [...data];
      res.status(200).json(returnData);
    }
  });
});

/**
 * Get List of Events by user ID
 */
eventController.get('/user/:userID', (req, res) => {
  const query = `SELECT eventID, name, startDate, endDate, email, location FROM Event
      JOIN User_Join_Event USING(eventID)
      JOIN (SELECT userID, email from User WHERE userID LIKE ${req.params.userID}) userTable USING (userID);`;

  db.query(query, (err, data) => {
    if (err) {
      console.log('Error while performing Event Query.' + err);
    } else {
      const returnData = [...data];
      res.status(200).json(returnData);
    }
  });
});

/**
 * GET/
 * get All Contributions of the event
 */
eventController.get('/:eventID', (req, res) => {
  getEventDetail(res, req.params.eventID);
});

/**
 * POST/
 * User creates an event:
 * 1. Add a new event to DB
 * 2. Connect userID & eventID to User_Create_Event
 */
eventController.post('/', (req, res) => {
  const { name, startDate, endDate, location, userID } = req.body;

  // Create An Event Query
  const createEventQuery = `INSERT INTO Event(name, startDate, endDate, location) VALUES ("${name}", "${startDate}","${endDate}", "${location}")`;

  db.query(createEventQuery, (createEventErr, createdEvent, eventFields) => {
    if (createEventErr) return res.status(500).json(createEventErr);
    else if (createdEvent.length == 0)
      return res.status(500).json({ data: 'Create Event fail' });

    // Add User and Event into User_Create_Event
    const userCreateEvent = `INSERT INTO User_Create_Event VALUES('${userID}', ${createdEvent.insertId})`;
    const userJoinEvent = `INSERT INTO User_Join_Event VALUES('${userID}', ${createdEvent.insertId})`;

    db.query(userJoinEvent, (userJoinEventErr, data, userFields) => {
      if (userJoinEventErr) res.status(500).json(userJoinEventErr);
    });

    db.query(userCreateEvent, (userCreateEventErr, data, userFields) => {
      if (userCreateEventErr) return res.status(500).json(userCreateEventErr);
      else if (data.length == 0)
        return res.status(500).json({ data: 'User_Create_Event failed' });
      else {
        const getEvent = `SELECT * FROM Event WHERE eventID = '${createdEvent.insertId}'`;
        db.query(getEvent, (getEventErr, event, userFields) => {
          if (getEventErr) res.status(500).json(getEventErr);
          else return res.status(200).json({ ...event });
        });
      }
    });
  });
});

/**
 * POST/
 * Party creates an event:
 * 1. Add a new event to DB
 * 2. Connect partyID & eventID to Party_Has_Event
 */
eventController.post('/create', (req, res) => {
  const { name, startDate, endDate, partyID, location } = req.body;

  // Create An Event Query
  const createEventQuery = `INSERT INTO Event(name, startDate, endDate, location) VALUES ('${name}', '${startDate}','${endDate}', '${location}')`;

  db.query(createEventQuery, (createEventErr, createdEvent, eventFields) => {
    if (createEventErr) return res.status(500).json(createEventErr);
    else if (createdEvent.length == 0)
      return res.status(500).json({ data: 'Create Event fail' });

    // Add Party and Event into Party_Has_Event
    const partyCreateEvent = `INSERT INTO Party_Has_Event VALUES(${createdEvent.insertId}, '${partyID}')`;

    db.query(partyCreateEvent, (partyCreateEventErr, data, partyFields) => {
      if (partyCreateEventErr) return res.status(500).json(partyCreateEventErr);
      else if (data.length == 0)
        return res.status(500).json({ data: 'Party_Has_Event failed' });

      const getPartyEventsQuery = `SELECT eventID, name, startDate, endDate, location FROM Event 
                                    JOIN (SELECT eventID FROM Party_Has_Event WHERE Party_Has_Event.partyID=${partyID})a
                                    USING(eventID)`;

      db.query(getPartyEventsQuery, (err, data) => {
        if (err) return res.status(500).json(err);
        const returnData = [...data];
        res.status(200).json(returnData);
      });
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
        else {
          const getEvent = `SELECT * FROM Event WHERE eventID = '${foundEvent[0].eventID}'`;
          db.query(getEvent, (getEventErr, event, userFields) => {
            if (getEventErr) res.status(500).json(getEventErr);
            else return res.status(200).json({ ...event });
          });
        }
      });
    }
  });
});

/**
 * POST/
 * Add new category to the event
 */

eventController.post('/:eventID/contribute/', (req, res) => {
  const { userID, category, moneyAmount } = req.body;
  const addNewCategory = `INSERT INTO User_Contribute_Event VALUES('${req.params.eventID}', '${userID}', '${category}','${moneyAmount}')`;

  const checkCategoryExisted = `SELECT * FROM User_Contribute_Event WHERE category = '${category}' AND userID = '${userID}' AND eventID='${req.params.eventID}'`;

  db.query(checkCategoryExisted, (err, foundCategory) => {
    if (err) res.status(500).json({ err: err });
    else if (foundCategory.length > 0) {
      res.status(400).json({
        message: "You can't create the same category. Please update."
      });
    } else {
      db.query(addNewCategory, (addNewCategoryErr, data) => {
        if (addNewCategoryErr) res.status(500).json(addNewCategoryErr);
        else {
          getEventDetail(res, req.params.eventID);
        }
      });
    }
  });
});

eventController.post('/:eventID/calculate', (req, res) => {
  const getUserTotalAmount = `SELECT userID, SUM(amount) as "total"
      FROM User_Contribute_Event 
      GROUP BY userID;`;

  db.query(getUserTotalAmount, (err, data, fields) => {
    if (err) res.status(500).json({ err: err });
    else {
      let receipientList = [];
      let payeeList = [];
      let average = 0;
      let sum = 0;
      for (let i = 0; i < data.length; i++) {
        sum += data[i].total;
      }
      average = sum / data.length;

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

      receipientList.map(item => {
        console.log(item);
      });

      payeeList.map(item => {
        console.log(item);
      });

      for (let i = 0; i < receipientList.length; i++) {
        const receipientDiff = receipientList[i].diff;
        for (let j = 0; j < payeeList.length; j++) {
          const payeeDiff = payeeList[j].diff;
          let moneyLeft = receipientDiff + payeeDiff;

          console.log(`receipientDiff: ${receipientDiff}`);
          console.log(`payeeDiff: ${payeeDiff}`);

          console.log(moneyLeft);
          if (payeeDiff !== 'DONE' && moneyLeft >= 0) {
            const deleteAllUserByEventID = `DELETE FROM User_Owes_User WHERE eventID = '${req.params.eventID}'`;
            db.query(deleteAllUserByEventID, (err, data) => {
              if (err) return res.status(500).json(err);

              const userOwesUser = `INSERT INTO User_Owes_User Values(
                    '${receipientList[i].userID}',
                    '${payeeList[j].userID}', 
                    '${req.params.eventID}',
                    '${Math.abs(payeeDiff)}'
                    )`;
              console.log(userOwesUser);
              payeeList[j].diff = 'DONE';
              db.query(userOwesUser, (err1, data) => {
                if (err1)
                  res
                    .status(500)
                    .json({ message: false, userOwesUserErr: err1 });
              });
            });
          } else {
            continue;
          }
          receipientList[i].diff = moneyLeft;
        }
      }
      res.status(200).json({ message: true });
    }
  });
});

eventController.get('/:eventID/result', (req, res) => {
  const getAllUserOwesUserQuery = `SELECT payer.email as "payee", amount, recipient.email as "recipient", eventID
      FROM User_Owes_User uou
        JOIN User payer
        JOIN User recipient
        WHERE 
        uou.receipientID = recipient.userID AND 
            uou.payerID = payer.userID AND
            eventID = ${req.params.eventID};`;
  db.query(getAllUserOwesUserQuery, (err2, userOwesUserList) => {
    if (err2) res.status(500).json({ userOwesUserErr2: err2 });
    else {
      const returnData = [...userOwesUserList];
      res.status(200).json(returnData);
    }
  });
});

/**
 * PUT/
 * Update the money Amount of User_Contribute_Event
 */
eventController.put('/:eventID/contribute/', (req, res) => {
  const { categoryName, moneyAmount, userID } = req.body;
  const updateQuery = `UPDATE User_Contribute_Event SET amount = ${moneyAmount} WHERE category = '${categoryName}' AND eventID = ${req.params.eventID} AND userID = ${userID};`;
  db.query(updateQuery, (err, data) => {
    if (err) res.status(500).json({ err: err });
    else {
      getEventDetail(res, req.params.eventID);
    }
  });
});

export default eventController;
