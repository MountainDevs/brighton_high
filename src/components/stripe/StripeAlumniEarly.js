import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class StripeAlumniPre extends Component {
  onToken = (token) => {
    console.log(token)
    // fetch('/save-stripe-token', {
    //   method: 'POST',
    //   body: JSON.stringify(token),
    // }).then(response => {
    //   response.json().then(data => {
    //     alert(`Payment Successful, ${data.name}`);
    //   });
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
          shippingAddress={false}
          billingAddress={true}
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

export default StripeAlumniPre;