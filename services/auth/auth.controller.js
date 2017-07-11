const app = require('../../server'),
      db = app.get('db'),
      _ = require('lodash'),
      jwt = require('jsonwebtoken'),
      config = require('../../config.json');

createToken = (user) => {
  return jwt.sign(_.omit(user, 'password'), config.secret, { expiresIn: 60*60*5 });
}  

app.post('/sessions/create', (req, res, next) => {
  db.log_in([req.body.username, req.body.password]).then(user => {
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

app.get('/auth',
    (req, res, next) => {
      if (!req.user) {
        return res.sendStatus(401);
      } else {
        res.sendStatus(200);
      }
    }
);