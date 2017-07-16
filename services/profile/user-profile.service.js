"use strict";
const massive = require('massive');
const config = require('../../config.json');
const app = require('../../server');
const db = app.get('db');




//=================================================//
db.tables_seed()
.then(data => {
  console.log('User table successfully reset');
})
.catch(err => {
  console.log(err)
});

db.users.save({
    first_name: 'Sean',
    last_name: 'White',
    middle_name: 'Fucking',
    email: 'itsMe@gmail.com',
    password: 'passw0rd',
    phone: '9999999',
    address: '123 East St',
    city: 'Salt Lake City',
    state: 'UT',
    zipcode: '84675',
    bio: 'THIS IS A TEST BIO',
    attending: true,
    photo: "no photo"
  })
  .then(user => {
    console.log(user)
  })
  .catch(err => {
    console.log(err)
});

// db.read_users()
// .then(res => {
//   console.log(res)
// })
// .catch(err => {
//   console.log(err)
// });

//=================================================//


function getUser(req, res, next) {
  db.read_users()
  .then(data => {
    res.json(data);
  }).catch(err => {
    res.status(500).json(err);
  });
}

function postUser(req, res, next) {
  var user = req.body;
  db.users.save({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    password: user.password,
    phone: user.phone,
    address: user.address,
    city: user.city,
    state: user.state,
    zipcode: user.zipcode,
    bio: user.bio,
    attending: user.attending,
    photo: "no photo"
  }).then(user => {
    res.json(user);
  }).catch(err => {
    res.status(500).json(err);
  });
}

function updateUser(req, res, next) {
  //is this the same DB action as a post? 
}


function getRegisteredUsers(req, res, next) {
  //return all the registered user (picture, firstName, lastName, attending)
}

function getClassmates(req, res, next) {
  //return all classmates whos found field is false
}

function postStripeRecord(req, res, next) {
  //post stripe records to a stripe table for Sterling
}




module.exports = {
  getUser,
  postUser,
  updateUser,
  getRegisteredUsers, 
  getClassmates,
  postStripeRecord
}