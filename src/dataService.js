let axios = require('axios');

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
  attending: false,
  permissions: '',
  showProfile: false,
  stripe_token: false,
  facebookPage: '', 
  pastResidence: '',
  family: '',
  millitaryService: '',
  occupation: '',
  college: '',
  hobbies: '',
  honors: '',
  travel: '',
  bestMemory: '',
  worstMemory: '',
  dumb: '',
  crushes: '',
  changes: '',
  retirement: '',
  tenYears: '',
  photoOne: '',
  photoTwo: '',
  photoThree: ''
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
    attending: false,
    permissions: '',
    showProfile: false,
    stripe_token: false,
    facebookPage: '',
    family: '', 
    pastResidence: '',
    millitaryService: '',
    occupation: '',
    college: '',
    hobbies: '',
    honors: '',
    travel: '',
    bestMemory: '',
    worstMemory: '',
    dumb: '',
    crushes: '',
    changes: '',
    retirement: '',
    tenYears: '',
    photoOne: '',
    photoTwo: '',
    photoThree: ''
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
    // checkUser();
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
  if (data.facebook_page) userData.facebookPage = data.facebook_page;
  if (data.family) userData.family = data.family;
  if (data.past_residence) userData.pastResidence = data.past_residence;
  if (data.millitary_service) userData.millitaryService = data.millitary_service;
  if (data.occupation) userData.occupation = data.occupation;
  if (data.college) userData.college = data.college;
  if (data.hobbies) userData.hobbies = data.hobbies;
  if (data.honors) userData.honors = data.honors;
  if (data.travel) userData.travel = data.travel;
  if (data.best_memory) userData.bestMemory = data.best_memory;
  if (data.worst_memory) userData.worstMemory = data.worst_memory;
  if (data.dumb) userData.dumb = data.dumb;
  if (data.crushes) userData.crushes = data.crushes;
  if (data.changes) userData.changes = data.changes;
  if (data.retirement) userData.retirement = data.retirement;
  if (data.ten_years) userData.tenYears = data.ten_years;
  if (data.photo_one) userData.photoOne = data.photo_one;
  if (data.photo_two) userData.photoTwo = data.photo_two;
  if (data.photo_three) userData.photoThree = data.photo_three;
  return userData;
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
  if (data.facebookPage) returnData.facebook_page = data.facebookPage;
  if (data.family) returnData.family = data.family;
  if (data.pastResidence) returnData.past_residence = data.pastResidence;
  if (data.millitaryService) returnData.millitary_service = data.millitaryService;
  if (data.occupation) returnData.occupation = data.occupation;
  if (data.college) returnData.college = data.college;
  if (data.hobbies) returnData.hobbies = data.hobbies;
  if (data.honors) returnData.honors = data.honors;
  if (data.travel) returnData.travel = data.travel;
  if (data.bestMemory) returnData.best_memory = data.bestMemory;
  if (data.worstMemory) returnData.worst_memory = data.worstMemory;
  if (data.dumb) returnData.dumb = data.dumb;
  if (data.crushes) returnData.crushes = data.crushes;
  if (data.changes) returnData.changes = data.changes;
  if (data.retirement) returnData.retirement = data.retirement;
  if (data.tenYears) returnData.ten_years = data.tenYears;
  if (data.photoOne) returnData.photo_one = data.photoOne;
  if (data.photoTwo) returnData.photo_two = data.photoTwo;
  if (data.photoThree) returnData.photo_three = data.photoThree;
  return returnData;
}

function login(user) {
  var data = { email: user.email, password: user.password };
  return axios.post(`/api/sessions/create`, data)
    .then(res => {
      console.log("login successful");
      var token = res.data.id_token;
      localStorage.setItem('jwt', JSON.stringify(token));
      axios.defaults.headers.common['Authorization'] = "Bearer " + token;
      let response = serializeUser(res.data.user);
      return true
    })
    .catch(err => {
      return false
    });
}

function logout() {
  localStorage.removeItem('jwt');
  clearData();
  window.reload();
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

function postUser(value) {
  let data = {
    firstName: value.firstName,
    middleName: value.middleName,
    lastName: value.lastName,
    email: value.email,
    password: value.password
  }

  return axios.post(`/api/user`, data)
  .then(res => {
    return login(res.data)
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
  return axios.get(`/api/user/${id}`)
  .then(res => {
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

function removeClassmate (classmate_id) {
  return axios.put(`/api/alumni/found`, {id: classmate_id})
  .then(res => res.data).then(getClassmates())
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
  serializeUser,
  removeClassmate
  // loginWithStripeToken
}

