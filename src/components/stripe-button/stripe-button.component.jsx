import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // converts the usd to a price
  const publishablekey =
    "pk_test_51IQBcPD7GY8jr7JkmCM6V25ihd842NUo0PYJekQmkmPvxCClWgfU6ciFaI7CSQXzMzTVR0Sxd9KqSMTVh2I1Gheh00SM61bsF2";

  const onToken = (token) => {
    console.log(token);
    alert("payment successfully");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      bilingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amout={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
