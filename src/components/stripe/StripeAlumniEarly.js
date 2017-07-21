import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { sendToStripe } from '../../dataService.js';

class StripeAlumniEarly extends Component {
  onToken = (token) => {
    console.log(token);
    token.amount = 9400;
    token.chargeDescription = "Brighton high alumni early_" + token.card.name;
    sendToStripe(token)
      .then(response => {
        response.then(data => {
          console.log(data);
          alert(`Payment Successful`);
        }).catch(alert("There was a problem processing your payment"));
      })

    // fetch('/save-stripe-token', {
    //   method: 'POST',
    //   body: JSON.stringify(token),
    // }).then(response => {
    //   response.json().then(data => {
    //     alert(`Payment Successful, ${data.name}`);
    //   })
    //   .catch(alert("There was a problem processing your payment"));
    // });
  }

  render() {
    return (
      <div>
        <StripeCheckout
          name="Early Registration"
          description="Alumni Only"
          panelLabel="Register"
          amount={9400}
          currency="USD"
          stripeKey="pk_test_mjnzkL9ebrh2Zbb5vy8hzniN"
          zipCode={false}
          allowRememberMe
          token={this.onToken}
          reconfigureOnUpdate={false}
          >
        </StripeCheckout>
      </div>

    )
  }
}

export default StripeAlumniEarly;