const axios = require('axios');

const BASEURL = 'http://localhost:5000';
let permissions = {
  payed: false,
}
let userData = {
  id: '',
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  middleName: '',
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
  console.log(userData);
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

function changePhoto(photoString) {
  var oldPhoto = userData.photo;
  if (oldPhoto) {
    return axios.put(`${BASEURL}/api/s3/delete`, {photoKey: oldPhoto})
      .then(res => {
        userData.photo = photoString;
        return updateUser();
      })
      .catch(err => {
        return err;
      })
  } else {
    userData.photo = photoString;
  }
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
  permissions,
  changePhoto
}

