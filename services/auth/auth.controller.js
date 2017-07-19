const app = require('../../server'),
      db = app.get('db'),
      _ = require('lodash'),
      jwt = require('jsonwebtoken'),
      expressJwt = require('express-jwt'),
      config = require('../../config.json');

createToken = (user) => {
  return jwt.sign(_.omit(user, 'password'), config.secret, { expiresIn: 60*60*5 });
}  

app.post('/api/sessions/create', (req, res, next) => {
  db.log_in([req.body.email, req.body.password]).then(user => {
    if (user[0]) {
      res.json({
        id_token: createToken(user),
        user: user[0]
      });
    } else {
      res.status(400).json({
        message: "Email or password incorrect."
      });
    }
  }).catch(err => {
    res.status(500).json(err);
  });
});

app.get('/api/sessions/current', expressJwt({secret: config.secret}), (req, res, next) => {
  if (req.user) {
    res.json({user: req.user});
  } else {
    res.status(500).json("No valid token");
  }
});

// app.get('/api/admin', expressJwt({ secret: config.secret }), (req, res) => {
//   if (!req.user.admin) return res.sendStatus(401);
//   res.sendStatus(200);
// });