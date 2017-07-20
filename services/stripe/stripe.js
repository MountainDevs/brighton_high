const stripe = require('stripe')(
  'sk_test_MiQTqPAvBkeVnQt4Y7H8VIf6'
)

stripe.charges.retrieve("ch_1AhniyGqXGDtzOtcd9La8uOM", {
  api_key: "sk_test_MiQTqPAvBkeVnQt4Y7H8VIf6"
});