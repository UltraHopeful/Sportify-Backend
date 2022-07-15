const express = require('express')
const Stripe = require('stripe')
const stripe = Stripe(process.env.STRIPE_KEY)

require("dotenv").config();


const checkoutSession = async (request,response) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'T-shirt',
              },
              unit_amount: 2000,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: 'http://localhost:3000/payment-success',
        cancel_url: 'http://localhost:3000/membership',
      });
    
      response.send({url: session.url});
    
}

// const calculateOrderAmount = (items) => {
//     // Replace this constant with a calculation of the order's amount
//     // Calculate the order total on the server to prevent
//     // people from directly manipulating the amount on the client
//     return 1700;
// };

// app.post("/create-payment-intent", async (request, response) => {
//     const items = request.body;

//     // Create a PaymentIntent with the order amount and currency
//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: calculateOrderAmount(items),
//         currency: "cad",
//         payment_method_types: ["card", "afterpay_clearpay"]
//     });

//     response.send({
//         clientSecret: paymentIntent.client_secret,
//     });
// });
module.exports = {checkoutSession}