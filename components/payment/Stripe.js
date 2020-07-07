import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './SecondStripeCheck';

class Stripe extends Component {
  state = {
    stripe: null
  }

  componentDidMount() {
    if (window.Stripe) {
      this.setState({ stripe: window.Stripe('pk_test_isDXP591iL1OVb7ZqqfJoYSy00ODZSz9IF') });
    } else {
      document.querySelector('#stripe-js').addEventListener('load', () => {
        // Create Stripe instance once Stripe.js loads
        this.setState({ stripe: window.Stripe('pk_test_isDXP591iL1OVb7ZqqfJoYSy00ODZSz9IF') });
      });
    }
  }

  render() {

    return (
      <StripeProvider apiKey="pk_test_isDXP591iL1OVb7ZqqfJoYSy00ODZSz9IF" stripe={this.state.stripe}>
        <div className="example">
          <Elements>
            <CheckoutForm user={this.props.user} address={this.props.address} total={this.props.total} />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default Stripe;