import axios from 'axios';

const BASEURL = '';

let userData = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  middleName: '',
  email: '',
  phone: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zipcode: '',
  bio: ''
}

function login(email, password) {
  axios.post(`${BASEURL}`)
}

function logout() {
  // to be determined
}

function postUser(user) {
  axios.post(`${BASEURL}/post_user`)
}

function updateUser(user) {
  axios.post(`${BASEURL}/update_user`)
}

function postStripeRecord() {
  axios.post(`${BASEURL}/post_stripe_record`)
}

function getUser(email) {
  axios.get(`${BASEURL}/get_user`)
}

function getRegisterdUsers() {
  axios.get(`${BASEURL}/get_registered_users`)
}

function getClassmates() {
  axios.get(`${BASEURL}/get_classmates`)
} 

module.exports = {
  userData,
  login,
  logout,
  postUser,
  updateUser,
  postStripeRecord,
  getUser,
  getClassmates
}