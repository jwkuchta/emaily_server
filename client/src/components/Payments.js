import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'

class Payments extends Component {
    render() {
        return (
            <StripeCheckout 
            amount={500} // 500 cents
            token={token => console.log(token)} // callback after we get authorization object from Stripe api
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            />
        )
    }
}

export default Payments
