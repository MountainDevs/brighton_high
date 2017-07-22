import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class StripeAlumniDayOf extends Component {
  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`Payment Successful, ${data.name}`);
      });
    });
  }

  render() {
    return (
      <div>
        <StripeCheckout
          name="Day of Registration"
          description="Alumni Only"
          panelLabel="Register"
          amount={12000}
          currency="USD"
          stripeKey="pk_test_yFliojp5k9U6cxv0NRVL3W9U"
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

export default StripeAlumniDayOf