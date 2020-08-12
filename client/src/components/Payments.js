import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'

class Payments extends Component {
    render() {
        return (
            <StripeCheckout 
            name='Emaily'
            description='$5 for 5 credits'
            amount={500} // 500 cents
            token={token => console.log(token)} // callback after we get authorization object from Stripe api
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className='btn'>Add Credits</button>
            </StripeCheckout>
        )
    }
}

export default Payments
