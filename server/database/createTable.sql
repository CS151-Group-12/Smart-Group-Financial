CREATE TABLE `User` (
  `userID` INT NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(60) NOT NULL
);
CREATE TABLE `Event` (
  `eventID` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `location` VARCHAR(45) NOT NULL,
  `startDate` VARCHAR(45) NOT NULL,
  `endDate` VARCHAR(45) NOT NULL
);
CREATE TABLE `User` (`userID` INT NOT NULL);
CREATE TABLE `Party` (
  `partyID` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL
);
CREATE TABLE `Location` (
  `locationID` INT NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `zipCode` INT NOT NULL,
  `state` VARCHAR(45) NOT NULL
);
CREATE TABLE `User-Contribute-Event` (
  `eventID` INT NOT NULL,
  `userID` INT NOT NULL,
  `category` INT NOT NULL,
  `amount` INT NOT NULL
);
CREATE TABLE `Event-HappenAt-Locatio` (
  `eventID` INT NOT NULL,
  `locationID` INT NOT NULL
);
CREATE TABLE `Party-Has-Event` (
  `eventID` INT NOT NULL,
  `partyID` INT NOT NULL
);
CREATE TABLE `User-Create-Event` (
  `userID` INT NOT NULL,
  `eventID` INT NOT NULL
);
CREATE TABLE `User-Join-Party` (
  `userID` INT NOT NULL,
  `partyID` INT NOT NULL
);
CREATE TABLE `User-Form-Party` (
  `userID` INT NOT NULL,
  `partyID` INT NOT NULL
);
CREATE TABLE `Party-Has-Event` (
  `eventID` INT NOT NULL,
  `partyID` INT NOT NULL
);
CREATE TABLE `User-Create-Event` (
  `userID` INT NOT NULL,
  `eventID` INT NOT NULL
);
CREATE TABLE `User-Join-Party` (
  `userID` INT NOT NULL,
  `partyID` INT NOT NULL
);
CREATE TABLE `User-Form-Party` (
  `userID` INT NOT NULL,
  `partyID` INT NOT NULL
);
CREATE TABLE `User-Owe-User` (
  `receipientID` INT NOT NULL,
  `payerID` INT NOT NULL,
  `amount` INT NOT NULL,
  `eventID` INT NOT NULL
);