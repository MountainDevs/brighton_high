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
  permissions: '',
  showProfile: false,
  stripe_token: false
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
    permissions: '',
    showProfile: false,
    stripe_token: ''
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
      console.log('step 2')
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
  if (data.show_profile !== null && data.show_profile !== undefined) userData.showProfile = data.show_profile;
  if (data.stripe_token !== null && data.stripe_token !== undefined) userData.stripe_token = data.stripe_token;
}

function deserializeUser(data) {
  var returnData = {};
  if (data.id) returnData.id = data.id;
  if (data.email) returnData.email = data.email;
  if (data.firstName) returnData.first_name = data.firstName;
  if (data.lastName) returnData.last_name= data.lastName;
  if (data.middleName) returnData.middle_name= data.middleName;
  if (data.phone) returnData.phone = data.phone;
  if (data.address) returnData.address = data.address;
  if (data.city) returnData.city = data.city;
  if (data.state) returnData.state = data.state;
  if (data.zipcode) returnData.zipcode = data.zipcode;
  if (data.bio) returnData.bio = data.bio;
  if (data.attending) returnData.attending = data.attending;
  if (data.photo) returnData.photo = data.photo;
  if (data.permissions) returnData.permissions = data.permissions;
  if (data.password) returnData.password = data.password;
  if (data.showProfile !== null && data.showProfile !== undefined) returnData.show_profile = data.showProfile;
  if (data.stripe_token !== null && data.stripe_token !== undefined) returnData.stripe_token = data.stripe_token;
  return returnData;
}

function login(email, password) {
  console.log("login called");
  var data = { email: email, password: password };
  return axios.post(`/api/sessions/create`, data)
    .then(res => {
      console.log("login successful");
      var token = res.data.id_token;
      localStorage.setItem('jwt', JSON.stringify(token));
      axios.defaults.headers.common['Authorization'] = "Bearer " + token;
      serializeUser(res.data.user);
      console.log("user login return: ", res.data.user);
      return true
    })
    .catch(err => {
      return false
    });
}

function logout() {
  localStorage.removeItem('jwt');
  clearData();
  window.reload()

  return;
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
  var data = {
    firstName: userData.firstName,
    middleName: userData.middleName,
    lastName: userData.lastName,
    email: userData.email,
    password: userData.password
  }
  return axios.post(`/api/user`, data)
  .then(res => {
    login(data.email, data.password);
    return res.data
  })
  .catch(err => err);
}

function updateUser() {
  var data = deserializeUser(userData);
  return axios.put(`/api/user`, data)
  .then(res => {
    serializeUser(res.data);
    return res.data;
  })
  .catch(err => err);
}

function postStripeRecord(record) {
  return axios.post(`/api/stripe_record`, {record})
  .then(res => res.data)
}

function sendToStripe(data) {
  return axios.post('/api/stripe/create_charge', data);
}

function getUser(id) {
  console.log(id)
  return axios.get(`/api/user/${id}`)
  .then(res => {
    console.log('step ...')
    console.log(res)
    serializeUser(res.data);
    return res.data;
  })
}

function getAllUsers() {
  return axios.get(`/api/all_users`)
  .then(res => res.data)
}

function getDisplayingUsers() {
  return axios.get('/api/displaying_users')
    .then(res => res.data);
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

function updateShowProfile(value) {
  var data = {
    id: userData.id,
    value: value
  };
  return axios.put('/api/user/show_profile', data)
    .then(res => {
      serializeUser(res.data);
      return res.data;
    });
}

// function loginWithStripeToken(value) {
//   var data = {
//     stripe_token: value
//   }
//   return axios.put('/api/sessions/stripe_token', data)
//     .then(res => {
//       serializeUser(res.data);
//       return res.data;
//     })
//     .catch(err => {
//       return err;
//     })
// }

checkUser();

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
  clearData,
  sendToStripe,
  updateShowProfile,
  getDisplayingUsers,
  // loginWithStripeToken
}

