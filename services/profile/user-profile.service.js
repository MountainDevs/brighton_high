"use strict";
const massive = require('massive');
const config = require('../../config.json');
const app = require('../../server');
const db = app.get('db');


//=================================================//
db.tables_seed()
.then(data => {
  console.log('All tables successfully reset');
})
.catch(err => {
  console.log(err)
});
//=================================================//



function getUser(req, res, next) {

  db.users.findOne(Number(req.params.id))
  .then(data => {
    res.json(data);
  }).catch(err => {
    console.log(err)
  });
}

function postUser(req, res, next) {
  db.users.insert({
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    middle_name: req.body.middleName,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zipcode: req.body.zipcode,
    bio: req.body.bio,
    attending: req.body.attending,
    photo: req.body.photo
  })
  .then(user => {
    res.send(user)
  })
  .catch(err => {
    console.log(err)
  });
}

function updateUser(req, res, next) {
  db.users.update({
    id: req.body.id,
    email: req.body.email
  })
  .then(user => {
    res.send(user)
  })
  .catch(err => {
    console.log(err)
  });
}

function getAllUsers(req, res, next) {
  db.get_all_users()
  .then(users => {
    res.send(users)
  })
  .catch(err => {
    console.log(err)
  });
}

function getClassmates(req, res, next) {
  db.get_classmates()
  .then(classmates => {
    res.send(classmates)
  })
  .catch(err => {
    console.log(err)
  });
}

function postStripeRecord(req, res, next) {
  db.stripe_records.insert({
    record: req.body.record
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    console.log(err)
  });
}


module.exports = {
  getUser,
  postUser,
  updateUser,
  getAllUsers, 
  getClassmates,
  postStripeRecord
}