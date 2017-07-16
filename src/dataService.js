const axios = require('axios');

const BASEURL = '';

let userData = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  middleName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zipcode: '',
  bio: '',
  attending: ''
}

function login(email, password) {
  // login
}

function logout() {
  // logout
}

function postUser(user) {
  axios.post(`${BASEURL}/api/user`)
  .then(res => {

  })
}

function updateUser(user) {
  axios.post(`${BASEURL}/api/user`)
  .then(res => {

  })
}

function postStripeRecord() {
  axios.post(`${BASEURL}/api/stripe_record`)
}

function getUser(email) {
  axios.get(`${BASEURL}/api/user`)
  .then(res => {
    
  })
}

function getRegisterdUsers() {
  axios.get(`${BASEURL}/api/registered_users`)
  .then(res => {
    
  })
}

function getClassmates() {
  axios.get(`${BASEURL}/api/classmates`)
  .then(res => {
    
  })
} 

module.exports = {
  userData,
  login,
  logout,
  postUser,
  updateUser,
  postStripeRecord,
  getUser,
  getRegisterdUsers,
  getClassmates
}