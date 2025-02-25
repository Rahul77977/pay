import React from 'react';

const UpiPayment = () => {
  const handlePayment = () => {
    try {
      // Receiver's UPI ID (payee)
      const receiverUpiID = "7975866050@ybl";
      // Receiver's (merchant) name - URL encoded later
      const payeeName = "Merchant Name"; 
      // Unique order/transaction ID - ideally generated dynamically
      const orderId = "ORDER123";
      // Transaction description or note
      const transactionNote = "Hotel Booking Payment";
      // Payment amount (set to 1 Rupee)
      const amount = 1;
      
      // URL-encode parameters to handle spaces/special characters
      const encodedName = encodeURIComponent(payeeName);
      const encodedNote = encodeURIComponent(transactionNote);
      
      // Construct the UPI URL with the required parameters
      const upiUrl = `upi://pay?pa=${receiverUpiID}&pn=${encodedName}&tid=${orderId}&tn=${encodedNote}&am=${amount}&cu=INR`;
      
      // Log the URL (for debugging purposes)
      console.log("Redirecting to UPI URL:", upiUrl);
      
      // Attempt to open the UPI link in a new tab/window
      const newWindow = window.open(upiUrl, "_blank");
      if (!newWindow) {
        alert("Unable to open UPI payment link. Please ensure a UPI app is installed.");
        console.error("Failed to open UPI payment link.");
      }
    } catch (error) {
      console.error("Error initiating UPI Payment:", error);
    }
  };

  return (
    <button
      onClick={handlePayment}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        margin: "20px"
      }}
    >
      Pay with UPI
    </button>
  );
};

export default UpiPayment;
