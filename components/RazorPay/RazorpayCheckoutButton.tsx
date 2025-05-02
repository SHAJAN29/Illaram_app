"use client";

import React from "react";

interface RazorpayCheckoutButtonProps {
  amount: number;
  name: string;
  email: string;
  contact: string;
}

export default function RazorpayCheckoutButton({
  amount,
  name,
  email,
  contact,
}: RazorpayCheckoutButtonProps) {
  const loadRazorpay = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onerror = () =>
      alert("Razorpay SDK failed to load. Are you online?");
    script.onload = () => {
      const options = {
        key: process.env.RAZORPAY_KEY_ID, // from .env
        amount,
        currency: "INR",
        name: "Illaram Healthcare",
        description: "Program Enrollment Fee",
        prefill: {
          name,
          email,
          contact,
        },
        handler: function (response: any) {
          alert(
            `Payment successful! Razorpay ID: ${response.razorpay_payment_id}`
          );
          // Optionally: call your backend to store the transaction
        },
        theme: { color: "#3399cc" },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    };

    document.body.appendChild(script);
  };

  return (
    <button onClick={loadRazorpay} className="px-4 py-2 btn btn-blue">
      Pay ₹{amount / 100}
    </button>
  );
}
