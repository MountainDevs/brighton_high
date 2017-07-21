const stripe = require('stripe')(
  'sk_test_MiQTqPAvBkeVnQt4Y7H8VIf6'
)

const massive = require('massive');
const config = require('../../config.json');
const app = require('../../server');
const db = app.get('db');

// stripe.charges.retrieve("ch_1AhniyGqXGDtzOtcd9La8uOM", {
//   api_key: "sk_test_MiQTqPAvBkeVnQt4Y7H8VIf6"
// });

module.exports = {
  createCharge: (req, res, next) => {
    var token = req.body.id;
    var amount = req.body.amount;
    var description = req.body.chargeDescription;
    return stripe.charges.create({
      amount: amount,
      currency: "usd",
      description: description,
      source: token
    }, function(err, response) {
      if (err) return res.status(500).json(err);
      return res.json(response);
    });
  }
}