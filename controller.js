const app = require('./server')
const db = app.get('db');

db.set_user()
  .then(data => {
    console.log('User table successfully reset');
  })
  .catch(err => {
    console.log(err); 
  });

// db.address_create_seed().then((err, data) => {
//   if (err) console.log(err);
//   else console.log('Address table successfully reset');
// });

