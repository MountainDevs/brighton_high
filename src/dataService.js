const axios = require('axios');

const BASEURL = 'http://localhost:5000';

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
  attending: false,
  photo: ''
}

function login(email, password) {
  // login
}

function logout() {
  // logout
}

function postUser() {
  axios.post(`${BASEURL}/api/user`, userData)
  .then(res => {
    console.log(res.data)
  })
}

function updateUser() {
  axios.post(`${BASEURL}/api/user`, userData)
  .then(res => {
    console.log(res.data)
  })
}

function postStripeRecord(record) {
  axios.post(`${BASEURL}/api/stripe_record`, {record})
  .then(res => {
    console.log(res.data)
  })
}

function getUser(id) {
  axios.get(`${BASEURL}/api/user/${id}`)
  .then(res => {
    console.log(res.data)
  })
}

function getAllUsers() {
  axios.get(`${BASEURL}/api/all_users`)
  .then(res => {
    console.log(res.data)
  })
}

function getClassmates() {
  axios.get(`${BASEURL}/api/classmates`)
  .then(res => {
    console.log(res.data)
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
  getAllUsers,
  getClassmates
}


//TESTING


  postUser()
  updateUser()
  postStripeRecord('7362495876439')
  getUser(1)
  getAllUsers()
  getClassmates()