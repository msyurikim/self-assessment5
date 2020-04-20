var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });

var User = sequelize.define('User', {
  username: Sequelize.STRING
});

/*  Create a '/users' route that responds to
    a GET request with all users in the database */

// express.Router().get = ('/users', (req, res) => {
//   sequelize.User.findAll()
//     .then((users) => {
//       res.json(users);
//       res.status(200).end();
//     });
// });

app.get('/users', (req, res) => { //express
  User.findAll()  //sequelize
    .then((users) => {
      res.json(users);
      res.status(200).end();
    });
});


module.exports = {
  app: app,
  User: User
};
