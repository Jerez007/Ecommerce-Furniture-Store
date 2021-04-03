// can be access by going to domain/.netlify/functions/create-payment-intent
// set up as per stripe doc
// see the server.js file for details here: https://stripe.com/docs/payments/integration-builder

// gets the env variables
require("dotenv").config();

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async function (event, context) {
  if (event.body) {
    //returns this for post request
    console.log('>>>>>>>>>>>event.body in create-payment-intent', event.body);
    const { cart, total_amount } = JSON.parse(event.body);

    // calculates total
    // <=================FOR TESTING PURPOSES =============>
    // For production, must communicate with the backend
    const calculateOrderAmount = () => {
      return total_amount;
    };

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: "usd",
      });

      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: error.message }),
      };
    }

  }
  return {
    statusCode: 200,
    body: "Create Payment Intent",
  };
};
