import React from 'react';

const UpiPayment = () => {
  const handlePayment = () => {
    try {
      // Your Razorpay.me payment link
      const razorpayLink = "https://razorpay.me/@rahul7002";

      // Log for debugging
      console.log("Redirecting to Razorpay Payment Link:", razorpayLink);

      // Open the payment link in a new tab
      const newWindow = window.open(razorpayLink, "_blank");
      if (!newWindow) {
        alert("Unable to open Razorpay payment link. Please try again.");
        console.error("Failed to open Razorpay payment link.");
      }
    } catch (error) {
      console.error("Error initiating Razorpay Payment:", error);
    }
  };

  return (
    <button
      onClick={handlePayment}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        margin: "20px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "5px"
      }}
    >
      Pay Now with Razorpay
    </button>
  );
};

export default UpiPayment;
