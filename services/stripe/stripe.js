const massive = require('massive');
const config = require('../../config.json');
const app = require('../../server');
const db = app.get('db');


const stripe = require('stripe')(
  config.stripeKey
)


// stripe.charges.retrieve("ch_1AhniyGqXGDtzOtcd9La8uOM", {
//   api_key: "sk_test_MiQTqPAvBkeVnQt4Y7H8VIf6"
// });

function getId(description) {
  if ( parseInt(description.substring(description.indexOf("-") + 1, description.lastIndexOf("-"))) && typeof parseInt(description.substring(description.indexOf("-") + 1, description.lastIndexOf("-"))) === 'number' ) {
    return parseInt(description.substring(description.indexOf("-") + 1, description.lastIndexOf("-")));
  } else {
    throw new Error("Something obviously went wrong");
  }
}

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
      try {
        var id = getId(response.description);
        return db.users.update({
          id: id,
          stripe_token: response.id
        })
        .then(data => {
          return res.json({dbData: data, stripeData: response});
        })
        .catch(err => err);
      } catch (e) {
        return res.status(500).json("There was an error parsing Stripe information");
      }
    })
  }
}