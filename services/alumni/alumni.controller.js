const app = require('../../server'),
      db = app.get('db'),
      jwt = require('express-jwt'),
      config = require('../../config.json');


app.get('/api/alumni', (req, res, next) => {
  db.alumni.find()
    .then(alumni => {
      res.json(alumni);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

app.get('/api/alumni/found', jwt({ secret: config.secret }), (req, res, next) => {

  db.alumni.find({
    found: true
  }).then(alumni => {
    res.json(alumni);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

app.get('/api/alumni/lost', jwt({ secret: config.secret }), (req, res, next) => {
  db.alumni.find({
    found: false
  }).then(alumni => {
    res.json(alumni);
  })
  .catch(err => {
    res.status(500).json(err);
  })
});

app.put('/api/alumni/found', jwt({ secret: config.secret }), (req, res, next) => {
  var id = req.body.id;

  db.alumni.update({
    id: id,
    found: true
  })
    .then(alumni => {
      res.json(alumni);
      console.log("found");
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

app.put('/api/alumni/lost',jwt({ secret: config.secret }), (req, res, next) => {
  var ids = req.body.ids;
  var idString = "(";
  for (var i = 0; i < ids.length; i++) {
    if (i === ids.length -1) {
      idString += `${ids[i]})`;
    } else {
      idString += `${ids[i]}, `;
    }
  }

  db.run(`UPDATE alumni SET found = false WHERE id IN ${idString} RETURNING *`)
    .then(alumni => {
      res.json(alumni);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});