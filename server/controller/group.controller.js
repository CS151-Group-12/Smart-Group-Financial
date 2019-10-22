import express from "express";

const groupController = express.Router();

groupController.get("/", (req, res) => {
  db.query("SELECT * from smart_group_financial.Group", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const returnData = { ...data };
      res.status(200).json(returnData);
    }
  });
});

groupController.post("/", (req, res) => {
  const { name } = req.body;
  const createGroupQuery = `INSERT INTO smart_group_financial.Group(name) VALUES ('${name}')`;
  const getUserID = `select id from User where email like '${req.body.email}'`;

  db.query(getUserID, (err1, foundUser) => {
    if (err1) res.status(500).json(err1);
    else {
      db.query(createGroupQuery, (err2, createdGroup) => {
        if (err2) res.status(500).json(err2);
        else {
          const ownerFormGroup = `insert into Owner_Form_Group values('${foundUser[0].id}', ${createdGroup.insertId})`;

          db.query(ownerFormGroup, (err3, data) => {
            if (err3) res.status(500).json(err3);
            else res.status(200).json({ data });
          });
        }
      });
    }
  });
});

export default groupController;
