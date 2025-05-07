'use client'; // for Next.js app directory

import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { jwtDecode } from 'jwt-decode';
import { CheckCircleIcon } from "@heroicons/react/24/solid";

// Interface for the ProgramCard props
interface ProgramProps {
  title: string;
  description: string;
  price: number;
  username?: string | string[] ; 
  duration: string;
  mostPopular: boolean;
  // Add duration property
  highlights: string[];// Add username property
  popular:boolean;
}

const ProgramCard: React.FC<ProgramProps> = ({ title, description, price, username ,highlights,duration,mostPopular,popular}) => {
  const router = useRouter();

  // Type definition for decoded JWT token
  // type DecodedToken = {
  //   username: string;
  //   email: string;
  // };

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
        key: process.env.RAZORPAY_KEY || '', // Razorpay key
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

            // Save payment details to backend
            const paymentRes = await fetch('/api/razorPay/payments/save', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                username: username,
                
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
              router.push(`/user/login?returnTo=/user/dashboard/${username}`);;
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


      <div
        
        className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-all flex flex-col justify-between"
      >
        <div className="relative">
          {/* Badge */}
          
            <div className={`absolute top-0 right-0 px-3 py-1  ${mostPopular?"bg-orange-600": (popular ? "bg-emerald-600" : "")} text-white text-xs font-medium rounded-full shadow-sm`}>
             {mostPopular ? "Most-Popular" : (popular ? "Popular" : "")}
            </div>
          
    
          {/* Card Content */}
          <div className="space-y-4 pb-6 pt-5">
            <h3 className="text-xl font-semibold text-gray-800 tracking-tight">
              {title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {description}
            </p>

            <div className="flex justify-center items-center text-gray-800 mb-6">
            <span className="text-3xl font-bold">₹</span>
            <span className="text-5xl font-extrabold">{price}</span>
            <span className="text-lg mt-5 text-[15px] font-medium ml-2">/{duration}</span>
          </div>


    
            {/* Highlights */}
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
          {highlights.map((point, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircleIcon className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
            {/* Price */}
            {/* <div className="text-lg font-bold text-illaramPrimary mt-4">
            ₹{price}
            </div> */}
          </div>
        </div>
    
        {/* Buy Button */}
        <button
          onClick={() => handlePayment()}
          className="mt-auto w-full btn btn-blue font-medium py-2 px-4 rounded-md transition"
        >
          Join Now
        </button>
      </div>

    
  );
};

export default ProgramCard;
