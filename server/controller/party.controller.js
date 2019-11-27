import express from 'express';

const partyController = express.Router();

/**
 * GET/
 * Get ALL groups in the DB
 */
partyController.get('/', (req, res) => {
  db.query('SELECT * from Party', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const returnData = { ...data };
      res.status(200).json(returnData);
    }
  });
});

/**
 * GET/
 * Get ALL groups in the DB
 */
partyController.get('/members', (req, res) => {
  const partyID = req.body.partyID;

  const getPartyMembersQuery = `SELECT email FROM User 
                                JOIN (SELECT userID FROM User_Join_Party WHERE User_Join_Party.partyID=${partyID})a
                                USING(userID)`;

  db.query(getPartyMembersQuery, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const returnData = [...data];
      res.status(200).json(returnData);
    }
  });
});

partyController.get('/events', (req, res) => {
  const partyID = req.body.partyID;

  const getPartyMembersQuery = `SELECT name, startDate, endDate FROM Events 
                                JOIN (SELECT eventID FROM Party_Has_Event WHERE Part_Has_Event.partyID=${partyID})a
                                USING(eventID)`;

  db.query(getPartyMembersQuery, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const returnData = [...data];
      res.status(200).json(returnData);
    }
  });
});

/**
 * Get List of Parties by user ID
 */
partyController.get('/:id', (req, res) => {
  const query = `SELECT partyID, name, email FROM Party
                  JOIN User_Join_Party USING(partyID)
                  JOIN (SELECT userID, email from User WHERE userID LIKE ${req.params.id}) userTable USING(userID);`;

  db.query(query, (err, data) => {
    if (err) {
      console.log('Error while performing Query.' + err);
    } else {
      const returnData = { ...data };
      res.status(200).json(returnData);
    }
  });
});

/**
 * POST/
 * User creates an group:
 * 1. Add a new party to DB
 * 2. Connect userID & partyID to Owner_Create_Party
 */
partyController.post('/', (req, res) => {
  const { name, userID } = req.body;

  // Create a Party Query
  const createPartyQuery = `INSERT INTO Party(name) VALUES ('${name}')`;

  db.query(createPartyQuery, (createPartyErr, createParty) => {
    if (createPartyErr) return res.status(500).json(createPartyErr);
    if (createParty.length == 0)
      return res.status(404).json({ message: 'Create Party Failed' });

    const ownerFormParty = `INSERT INTO Owner_Form_Party values('${userID}', ${createParty.insertId})`;

    db.query(ownerFormParty, (ownerFormPartyErr, data) => {
      if (ownerFormPartyErr) return res.status(500).json(ownerFormPartyErr);
      return res.status(200).json({ data });
    });
  });
});

/**
 * POST/
 * User Join a Party By Name
 */
partyController.post('/join', (req, res) => {
  const { userID, name } = req.body;

  const getPartyByNameQuery = `SELECT id FROM Party WHERE name like '${name}'`;

  db.query(getPartyByNameQuery, (err, foundParty) => {
    if (err) return res.status(500).json(err);
    else if (foundParty.length == 0)
      return res.status(404).json({ message: `Party Name: ${name} not Found` });

    const joinPartyQuery = `INSERT INTO User_Join_Party values('${userID}', '${foundParty[0].id}')`;

    db.query(joinPartyQuery, (err1, data) => {
      if (err1) return res.status(500).json(err1);
      return res.status(200).json({ data });
    });
  });
});

export default partyController;