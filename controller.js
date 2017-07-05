const app = require('./server')
const db = app.get('db');

db.set_user((err, data) => {
  if (err) console.log(err);
  else console.log('All tables successfully reset');
});