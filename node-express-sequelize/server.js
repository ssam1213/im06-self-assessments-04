var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });

var User = sequelize.define('User', {
  username: Sequelize.STRING
});
console.log(User);

/*  Create a '/users' route that responds to 
    a GET request with all users in the database */

app.get('/users', function (req, res) {
  res.send('hi');
});

app.post('/users', function (req, res) {
  var body = req.body;
  models.User.create({username: body}).then(function(result) {
    res.json(result);
  }).catch(function(err) {
    console.log('error');
    
  });
});
module.exports = { 
  app: app,
  User: User
};
