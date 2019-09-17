# Smart Group Financial

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
