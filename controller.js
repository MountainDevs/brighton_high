const app = require('./server')
const db = app.get('db');

db.set_user().then((err, data) => {
  if (err) console.log("Error: ", err);
  else console.log('User table successfully reset');
});

// db.address_create_seed().then((err, data) => {
//   if (err) console.log(err);
//   else console.log('Address table successfully reset');
// });

// module.exports = app;