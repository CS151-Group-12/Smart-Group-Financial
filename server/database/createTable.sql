CREATE TABLE `User` (
  `userID` INT NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(60) NOT NULL);

CREATE TABLE `Event` (
  `eventID` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `location` VARCHAR(45) NOT NULL,
  `startDate` VARCHAR(45) NOT NULL,
  `endDate` VARCHAR(45) NOT NULL);

CREATE TABLE `Owner` (
  `userID` INT NOT NULL);

CREATE TABLE `Group` (
  `groupID` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL);

CREATE TABLE `Location` (
  `locationID` INT NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `zipCode` INT NOT NULL,
  `state` VARCHAR(45) NOT NULL);

CREATE TABLE `User-Contribute-Event` (
  `eventID` INT NOT NULL,
  `userID` INT NOT NULL,
  `category` INT NOT NULL,
  `amount` INT NOT NULL);

CREATE TABLE `Event-HappenAt-Locatio` (
  `eventID` INT NOT NULL,
  `locationID` INT NOT NULL);

CREATE TABLE `Group-Has-Event` (
  `eventID` INT NOT NULL,
  `groupID` INT NOT NULL);

CREATE TABLE `Owner-Create-Event` (
  `ownerID` INT NOT NULL,
  `eventID` INT NOT NULL);

CREATE TABLE `User-Join-Group` (
  `userID` INT NOT NULL,
  `groupID` INT NOT NULL);

CREATE TABLE `Owner-Form-Group` (
  `ownerID` INT NOT NULL,
  `groupID` INT NOT NULL);

CREATE TABLE `Group-Has-Event` (
  `eventID` INT NOT NULL,
  `groupID` INT NOT NULL);

CREATE TABLE `Owner-Create-Event` (
  `ownerID` INT NOT NULL,
  `eventID` INT NOT NULL);

CREATE TABLE `User-Join-Group` (
  `userID` INT NOT NULL,
  `groupID` INT NOT NULL);

CREATE TABLE `Owner-Form-Group` (
  `ownerID` INT NOT NULL,
  `groupID` INT NOT NULL);

CREATE TABLE `User-Owe-User` (
  `receipientID` INT NOT NULL,
  `payerID` INT NOT NULL,
  `amount` INT NOT NULL,
  `eventID` INT NOT NULL);
