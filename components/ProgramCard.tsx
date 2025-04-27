'use client'; // for Next.js app directory

import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { jwtDecode } from 'jwt-decode';

// Interface for the ProgramCard props
interface ProgramProps {
  title: string;
  description: string;
  price: number;
  username?: string | string[]; // Add username property
}

const ProgramCard: React.FC<ProgramProps> = ({ title, description, price, username }) => {
  const router = useRouter();

  // Type definition for decoded JWT token
  type DecodedToken = {
    username: string;
    email: string;
  };

  // Dynamically load the Razorpay checkout script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Handle payment process
  const handlePayment = async () => {
    try {
      const res = await fetch('/api/razorPay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: price }),
      });

      const data = await res.json();

      if (!data || !data.id) {
        throw new Error('Failed to create Razorpay order');
      }

      const loaded = await loadRazorpayScript();
      if (!loaded) {
        toast.error('Failed to load Razorpay SDK');
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY || '', // Razorpay key
        amount: data.amount,
        currency: 'INR',
        name: 'Illaram Healthcare',
        description: title.replace(/[^\w\s.,\-()/&]+/g, ''), // Cleaned string
        order_id: data.id,
        handler: async function (response: any) {
          // Notify user on success
          toast.success(`🎉 Payment Successful! Payment ID: ${response.razorpay_payment_id}`);

          try {
            const token = localStorage.getItem('token');
            if (!token) {
              throw new Error('No authentication token found.');
            }

            const decoded = jwtDecode<DecodedToken>(token);

            // Save payment details to backend
            const paymentRes = await fetch('/api/razorPay/payments/save', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                username: decoded.username,
                email: decoded.email,
                payment: {
                  paymentId: response.razorpay_payment_id,
                  orderId: response.razorpay_order_id,
                  signature: response.razorpay_signature,
                  program: title,
                  amount: price,
                  status: 'success', // Payment success
                },
              }),
            });

            if (!paymentRes.ok) {
              throw new Error('Payment saving failed with status: ' + paymentRes.status);
            }

            if (paymentRes.ok) {
             return  router.push(`/user/dashboard/${decoded.username}`);
            }


            // Optionally, redirect to login after payment
            setTimeout(() => {
              router.push('/user/login');
            }, 3000); // Redirect after 3 seconds
          } catch (err) {
            toast.error('Error saving payment!');
            console.error('Error:', err);
          }
        },
        prefill: {
          name: 'John Doe',
          email: 'john@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#6366F1',
        },
      };

      const razor = new (window as any).Razorpay(options);
      razor.open();
    } catch (error) {
      toast.error('An error occurred while processing your payment!');
      console.error('Payment Error:', error);
    }
  };

  return (
    <div className="bg-white border rounded-lg p-6 shadow-md hover:shadow-lg transition-all flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <p className="text-indigo-600 font-bold text-lg mb-4">₹{price}</p>
      </div>
      <button
        onClick={handlePayment}
        className="mt-auto btn btn-blue py-2 rounded transition cursor-pointer"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProgramCard;
