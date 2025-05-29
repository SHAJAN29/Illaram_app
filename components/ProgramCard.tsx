'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { CheckCircleIcon } from "@heroicons/react/24/solid";

interface ProgramProps {
  title: string;
  description: string;
  price: number;
  username?: string | string[];
  duration: string;
  mostPopular: boolean;
  highlights: string[];
  popular: boolean;
}

const ProgramCard: React.FC<ProgramProps> = ({
  title,
  description,
  price,
  username,
  highlights,
  duration,
  mostPopular,
  popular,
}) => {
  const router = useRouter();

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    try {
      const res = await fetch('/api/razorPay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: price }),
      });

      const data = await res.json();
      if (!data?.id) throw new Error('Failed to create Razorpay order');

      const loaded = await loadRazorpayScript();
      if (!loaded) {
        toast.error('Failed to load Razorpay SDK');
        return;
      }

      const options = {
        key: process.env.RAZORPAY_KEY || '',
        amount: data.amount,
        currency: 'INR',
        name: 'Illaram Healthcare',
        description: title.replace(/[^\w\s.,\-()/&]+/g, ''),
        order_id: data.id,
        handler: async function (response: any) {
          toast.success(`🎉 Payment Successful! ID: ${response.razorpay_payment_id}`);

          try {
            const token = localStorage.getItem('token');
            if (!token) throw new Error('No authentication token found.');

            const paymentRes = await fetch('/api/razorPay/payments/save', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                username: username || 'guest',
                payment: {
                  paymentId: response.razorpay_payment_id,
                  orderId: response.razorpay_order_id,
                  signature: response.razorpay_signature,
                  program: title,
                  amount: price,
                  status: 'success',
                },
              }),
            });

            if (!paymentRes.ok) throw new Error('Failed to save payment');

            router.push(`/user/login?returnTo=/user/dashboard/${username}`);
          } catch (err) {
            toast.error('Error saving payment!');
            console.error(err);
          }
        },
        prefill: {
          name: 'John Doe',
          email: 'john@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#94c159',
        },
      };

      const razor = new (window as any).Razorpay(options);
      razor.open();
    } catch (error) {
      toast.error('An error occurred during payment!');
      console.error(error);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-all flex flex-col justify-between">
      <div className="relative">
        {/* Badge */}
        {(mostPopular || popular) && (
          <div
            className={`absolute top-0 right-0 px-3 py-1 text-white text-xs font-medium rounded-full shadow-sm ${
              mostPopular ? 'bg-orange-600' : 'bg-[#94c159]'
            }`}
          >
            {mostPopular ? 'Most Popular' : 'Popular'}
          </div>
        )}

        {/* Card Content */}
        <div className="space-y-4 pb-6 pt-5">
          <h3 className="text-xl font-semibold text-gray-800 tracking-tight">{title}</h3>
          <p className="text-[#6b7280] text-sm leading-relaxed">{description}</p>

          <div className="flex justify-center items-end text-gray-800 mb-4">
            <span className="text-3xl font-bold">₹</span>
            <span className="text-5xl font-extrabold">{price}</span>
            <span className="text-md font-medium ml-1 mb-1">/{duration}</span>
          </div>

          {/* Highlights */}
          <ul className="space-y-3 text-sm text-gray-700">
            {highlights.map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircleIcon className="w-5 h-5 text-[#94c159] flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Buy Button */}
      <button
        onClick={handlePayment}
        className="mt-auto w-full py-2 px-4 rounded-md text-white font-semibold bg-[#94c159] hover:bg-[#7daa4e] transition"
      >
        Join Now
      </button>
    </div>
  );
};

export default ProgramCard;
