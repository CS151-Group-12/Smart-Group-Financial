import express from "express";
import logger from "winston";
import path from "path";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import mysql from "mysql";
import { config } from "./global";
import { userController, eventController, partyController } from "./controller";
const app = express();

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

// Set up CORS
app.use(cors());
app.use("/", userController);
app.use("/event", eventController);
app.use("/party", partyController);

/**
 * Get port from environment and store in Express.
 */
const { env, credential } = config;

app.listen(env.port, () => {
  logger.info(`Started successfully server at port ${env.port}`);
  mysql.createPool(credential).getConnection((err, db) => {
    global.db = db;
    logger.info(`Database status: ${db.state} successfully`);
  });
});
