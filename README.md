# Smart Group Financial

- Please click here to see the [Project Proposal](https://github.com/CS157A-Team-31/Smart-Group-Financial/blob/master/Project%20Proposal_Team31.pdf).

- Please click here to see the [Project requirement](https://github.com/CS157A-Team-31/Smart-Group-Financial/blob/master/Project%20Requirements.pdf).

## Project Overview 
**Problem Statement:**
When you’re on a trip with a group of friends, Person A spends $95 on food, Person B spends about $50 on gas, and Person C spends $100 on amenities. Then, it will be significantly time consuming to figure out how much one should pay back to another. Some groups use Excel, but they have to create their own formula, which might result in mistakes and take even more time to fix and re-calculate again. Additionally, there is a possibility that they may request the wrong amount of money. This can lead to problems with trust issues, misunderstandings, and uneven money distribution. As a result, we want to create an application that will not only solve these issues, but also provide everything needed to manage a trip on one platform. 
**Stakeholders:** This app focuses on any travel group
**Project Description:** 
We want to develop a database application that will serve as a platform for various groups to manage their events, event members, and finances involved with the event. The app will allow users to create different parties/trips/planners, invite other users of the app to be apart of the event, and enter the amount of money that each person has contributed to the event. Finally, the app will assist in calculating the total amount spent on the event, and then generate the amount of money that one person in the group may owe another. This will in effect create a way to fairly distribute the expenses used for the event.This application will also have a user-friendly interface that will allow users to easily take advantage of these properties. 
**Possible Data Model:**
	Entities
User (first name, last name, like a profile, etc., 1 user can create/own many events/trips)
Events: id, name, location, time, 1 event will contain a list of users participate in that specific event, multiple categories, a history of who changes the price
Categories: (Title, amount of money)
Groups: store a list of users, can store many events
History of events: List of users, and event’s information 


## System Environment 

HW/SW: Desktop Web Browser, Mac, Windows, Linux

**Overview**:
The architecture of our application is based on a typical MVC model. Our Client tier (View) will be written in Javascript, HTML, and CSS, using ReactJS as the framework. This level of the architecture is what the user will interact with to access the features of our application. The Business Logic Tier (Controller) will be written using NodeJs and ExpressJS, and this tier represents the Application Server that will act as the bridge of communication for the Client Tier and Database Tier. This tier will serve HTML pages to the user's device and accept HTTP requests from the user and follow with the appropriate response. Our Database Tier (Model) will be hosting MySQL as our application’s Relational Database Management System. This is where we will store all of the crucial data our application needs to function.

## Functional Requirements
```
Any user is able to login/register/logout an account
 Goal: 
 A new user can register an account with our app or log in with their Facebook/Google credentials 
 Functional Processes: 
 Input: Email/Password
 Output: Redirect to the user dashboard/homepage
 Prerequisite:
 User should be able to make a new account with active email, Facebook, or Google credentials 
 User should be able to log in with correct email and password combination
 Post-Condition:
 The user will be redirected to the dashboard/homepage where they will be able to see options to view their profile, groups, and events.
 Exceptions:
 If the user inputs the wrong email/password combination, an error message will be displayed. 
 
User is able to create any events
 Goal: 
 Registered user clicks a “Create Event” button to create a new event/trip
 Functional Processes:
 Input: User will log in to the web app, and click on the “Create Event” button. Fill in the form with the event: name, date, location, and description.
 Output: The page will be redirected to the new event page where they can start adding users and money they spend on the trip
  Const express = require(‘express’);
 Prerequisite:
 User is logged into their account
 User completely fills out the form for event information
 Post-Condition:
 Event will be created and added to the database
 User will be redirected to result page for new event
 Exceptions:
 If the user does not completely fill out Event information form an error message will be displayed

User is able to create groups and add other users to that group
 Goal: User can click on “Create Group” and add other users within that group for an event/trip
 Functional Processes:
 Input: User logs into the application, clicks on the button to create a group, and inputs other usernames to add within the group. 
 Output: An invitation to others will be sent which they can accept and join the group.
 Prerequisites:
 User is logged into their account
 Users that group created is trying to add exist in the system’s database (Tracked by email address)
 Post-Condition:
 New group is added to the database and all affiliated users are tied to it
 Exceptions:
 If the user tries to invite a member that does not exist and error message will be thrown
 If the user is not logged in to their account they will not have access to the “Create New Group” menu
 
User is able to add a category that he/she pays within those events 
 Goal: User enters the category of what they pay for, then the app will calculate and display the right amount for each person in the events.
 Functional Processes:
  - Input: The category that they pay for (food, gas, etc.) and the amount of money they pay. Users can input specifics, such as locations, restaurant names, etc.
  - Output: A real-time update to display the charges for each person.
 Prerequisite:
  User is already a member of an event
  Creator of the event is notified and must verify payment
 Post-Condition:
  New payment information will be applied to the event and database will be updated
 Exceptions:
  If event creator does not verify payment it is voided
  
User is able to see a history of changes in the events
 Goal: 
 User can refer back to details (group members, total, location) of past or favorite events
 Functional Processes:
 Input: User presses the “History” button
 Output: List of all user’s past events and that event’s info
 Prerequisite:
 User has past events that can be displayed
 Post-Condition:
 User will be redirected to a History page that displays a list of all the past events they were apart of
 Exceptions:
 If the user was not previously apart of any events they will be shown an empty result page
 
User is able to sort their list of events by time 
Goal:
 User will be able to sort their list of events in chronological order
 Functional Processes:
 Input: On the History page, user will click drop down sort button and choose how they want the list sorted
 Output: A sorted list will be presented to the user
 Prerequisite:
 There are a list of events displaying on the UI
 Post-Condition:
 The list will be sorted based on the time it is created
 Exceptions:
 If the user has no history of events there will be nothing to sort
 If the user only has one event listed the sort function will have no  effect on the list
```
## Non-functional Requirement
```
Implementation
- Develop a responsive web application in HTML/CSS/JavaScript, and ReactJS library for real-time update 
- Host and language the database/application server on Google Cloud Platform
Usability
- The application shall be displayed in English.
Reliability
- Support on major internet browsers such as Google Chrome.
Performance
- Respond to the user’s action and query data within 5 seconds.
Security
- Use JWT to authenticate and check for the user’s identity to protect users’ privacy
Scalability
- Multiple users will be able to access the application’s database without any latency issues
- The application will be able to serve multiple users at once
Packaging
- Application will be available to use on these platforms without any additional setup:
Windows and Mac
```
## Installation

To clone and run this repository you'll need:

- [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

Clone this repository

```
git clone git@github.com:CS157A-Team-31/Smart-Group-Financial.git
```

Install the dependencies and devDependencies.

```
cd server/ && npm i
```

Start the server. you need to go to server directory first. `cd server`, and run this command:

```
npm run dev
```

Open 'http://localhost:8080/'

Testing other routes: 'http://localhost:8080/users'

## Server Composition:

All the logic of fetching/retrieving data and setup Database

```
server
├── Controller  - Storing all APIs of the app including POST, PUT, DELETE
├── model       - Model of each object within database
└── App.js      - Everything a server needs
```

## Front-end Composition (React.js):

- [React.js](https://reactjs.org/)

## Authors

**Calvin Nguyen** - [NivlaCuong](https://github.com/NivlaCuong)
**Christian Castro** - [ChristianCastr0](https://github.com/ChristianCastr0)
**Pranika Bedi** - [pranikabedi](https://github.com/pranikabedi)

## License

Use of this source code is governed by an MIT-style license.
