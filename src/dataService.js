let axios = require('axios').create({
      baseURL: 'http://localhost:5000'
    });

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
  photo: '',
  permissions: ''
}

function clearData(){
  userData = {
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
    photo: '',
    permissions: ''
  }
}

function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
};

function verifyUser() {
  if(localStorage.getItem('jwt')) return true;
  else return false
}

function getIdFromLocal() {
  let jwt = localStorage.getItem('jwt');
  if(jwt) {
    checkUser();
    return parseJwt(jwt)['0'].id;
  } 
  else return false;
}

function setUserFromLocal(){
  return new Promise((resolve, reject) => {
    let id = getIdFromLocal()
    if(!id) return false;
    else {
      getUser(id).then(res => {
        resolve()
      })
    }
  })
}


function serializeUser(data) {
  if (data.id) userData.id = data.id;
  if (data.email) userData.email = data.email;
  if (data.first_name) userData.firstName = data.first_name;
  if (data.last_name) userData.lastName = data.last_name;
  if (data.middle_name) userData.middleName = data.middle_name;
  if (data.phone) userData.phone = data.phone;
  if (data.address) userData.address = data.address;
  if (data.city) userData.city = data.city;
  if (data.state) userData.state = data.state;
  if (data.zipcode) userData.zipcode = data.zipcode;
  if (data.bio) userData.bio = data.bio;
  if (data.attending) userData.attending = data.attending;
  if (data.photo) userData.photo = data.photo;
  if (data.permissions) userData.permissions = data.permissions;
  if (data.password) userData.password = data.password;
}

function login(email, password) {
  var data = { email: email, password: password }
  return axios.post(`/api/sessions/create`, data)
    .then(res => {
      var token = res.data.id_token;
      localStorage.setItem('jwt', JSON.stringify(token));
      axios.defaults.headers.common['Authorization'] = "Bearer " + token;
      serializeUser(res.data.user);
      return true
    })
    .catch(err => {
      return false
    });
}

function logout() {
  localStorage.removeItem('jwt');
}

function checkUser() {
  var token = '';
  try {
    token = JSON.parse(localStorage.getItem('jwt'));
  } catch (e) {
    token = null;
  }
  if (token !== null) {
    axios.defaults.headers.common['Authorization'] = "Bearer " + token;
    return checkToken();
  } else {
    return "No information";
  }
}

function checkToken() {
  return axios.get('/api/sessions/current')
      .then(res => {
        serializeUser(res.data.user);
        return;
      }).catch(err => err);
}

function postUser() {
  return axios.post(`/api/user`, userData)
  .then(res => res.data)
}

function updateUser() {
  return axios.put(`/api/user`, userData)
  .then(res => {
    serializeUser(res.data);
    return res.data;
  })
}

function postStripeRecord(record) {
  return axios.post(`/api/stripe_record`, {record})
  .then(res => res.data)
}

function getUser(id) {
  return axios.get(`/api/user/${id}`)
  .then(res => {
    serializeUser(res.data);
    return res.data;
  })
}

function getAllUsers() {
  return axios.get(`/api/all_users`)
  .then(res => res.data)
}

function getClassmates() {
  return axios.get(`/api/alumni`)
  .then(res =>  res.data)
} 

function changePhoto(photoString) {
  var oldPhoto = userData.photo;
  if (oldPhoto) {
    return axios.put(`/api/s3/delete`, {photoKey: oldPhoto})
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

// checkUser();

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
  changePhoto,
  checkUser, 
  checkToken,
  verifyUser,
  setUserFromLocal,
  clearData
}

