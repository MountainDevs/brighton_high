const axios = require('axios');

const BASEURL = 'http://localhost:5000';
let permissions = {
  payed: false,
}
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
  return axios.post(`${BASEURL}/api/user`, userData)
  .then(res => res.data)
}

function updateUser() {
  return axios.post(`${BASEURL}/api/user`, userData)
  .then(res => res.data)
}

function postStripeRecord(record) {
  return axios.post(`${BASEURL}/api/stripe_record`, {record})
  .then(res => res.data)
}

function getUser(id) {
  return axios.get(`${BASEURL}/api/user/${id}`)
  .then(res => res.data)
}

function getAllUsers() {
  return axios.get(`${BASEURL}/api/all_users`)
  .then(res => res.data)
}

function getClassmates() {
  return axios.get(`${BASEURL}/api/classmates`)
  .then(res =>  res.data)
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
  getClassmates,
  permissions
}

