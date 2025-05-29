"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';

type WeddingPlan = {
  title: string;
  price: number;
  description: string;
  duration: string;
  highlights: string[];
};

type RegularPlan = {
  name: string;
  monthly: number;
  yearly: number;
  features: string[];
};



const weddingPrograms = [
  {
    title: "❤️ 100days pre wedding program",
    description: "Achieve your ideal look and feel amazing on your big day.",
    price: 94539,
    duration: "100 days",
    highlights: [
      "Personalized diet and fitness plan",
      "Skin and hair treatments",
      "Weekly coaching sessions",
      "24/7 access to wellness experts",
      "1 year free subscription to our app",
      "10000 rupees credit points in wallet",
      "100% money back guarantee!",
    ],
  },
  {
    title: "✨ Beauty Enhancement Program",
    description: "Targeted skin & hair treatments for your big day.",
    price: 89994,
    duration: "100 days",
    highlights: [
      "Beauty and Hair care plans",
      "Diet and yoga plan",
      "Skin and hair treatments",
      "24/7 access to wellness experts",
      "10000 rupees credit points in wallet",
    ],
  },
  {
    title: "💪 Physical Conditioning Program",
    description: "Sculpt your body with personalized training + diet.",
    price: 79994,
    duration: "3 months",
    highlights: [
      "Strength and Endurance training",
      "Diet and fitness plan",
      "24/7 access to wellness experts",
      "10000 rupees credit points in wallet",
    ],
  },
];

const regularPlans = [
  {
    name: "Basic",
    monthly: 2599,
    yearly: 2399 * 12 - 2000,
    features: ["Consultation", "Basic Care", "Email Support"],
  },
  {
    name: "Standard",
    monthly: 3299,
    yearly: 3299 * 12 - 3000,
    features: ["Advanced Care", "Priority Support", "Diet Plans"],
  },
  {
    name: "Premium",
    monthly: 5299,
    yearly: 5299 * 12 - 5000,
    features: ["Complete Transformation", "1:1 Coaching", "24/7 Access"],
  },
];


const PricingPage = () => {




    
  const [isYearly, setIsYearly] = useState(false);
  const router = useRouter();
  const params = useParams();
  const username = params?.id || "guest";

  const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const handlePayment = async (planName: string, price: number) => {
  try {
    const res = await fetch("/api/razorPay/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: price }),
    });

    const data = await res.json();
    if (!data?.id) throw new Error("Failed to create Razorpay order");

    const loaded = await loadRazorpayScript();
    if (!loaded) {
      toast.error("Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: process.env.RAZORPAY_KEY || "",
      amount: data.amount,
      currency: "INR",
      name: "Illaram Healthcare",
      description: planName,
      order_id: data.id,
      handler: async function (response: any) {
        toast.success(`🎉 Payment Successful! ID: ${response.razorpay_payment_id}`);

        try {
          const token = localStorage.getItem("token");
          if (!token) throw new Error("No authentication token found.");

          const paymentRes = await fetch("/api/razorPay/payments/save", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username: username || "guest",
              payment: {
                paymentId: response.razorpay_payment_id,
                orderId: response.razorpay_order_id,
                signature: response.razorpay_signature,
                program: planName,
                amount: price,
                status: "success",
              },
            }),
          });

          if (!paymentRes.ok) throw new Error("Failed to save payment");

          router.push(`/user/login?returnTo=/user/dashboard/${username}`);
        } catch (err) {
          toast.error("Error saving payment!");
          console.error(err);
        }
      },
      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#94c159",
      },
    };

    const razor = new (window as any).Razorpay(options);
    razor.open();
  } catch (error) {
    toast.error("An error occurred during payment!");
    console.error(error);
  }
};

  return (
    <div className="font-[poppins] bg-[#f4f7f0] text-gray-800 py-20 px-6">
      {/* Section 1: Exclusive Wedding Pricing */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-center text-[#94c159] mb-4">
          💍 Exclusive Wedding Wellness Pricing
        </h2>
        <p className="text-center text-[#7a7a7a] mb-10 max-w-2xl mx-auto">
          Perfectly tailored programs to help you shine on your big day.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {weddingPrograms.map((plan, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all"
            >
              <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-[#94c159] font-bold text-2xl mb-2">₹{plan.price}</p>
              <p className="text-sm mb-3 text-gray-600">{plan.description}</p>
              <ul className="text-sm text-gray-700 mb-4 space-y-1">
                {plan.highlights.map((item, i) => (
                  <li key={i}>✅ {item}</li>
                ))}
              </ul>
<button
  onClick={() => handlePayment(plan.title, plan.price)}
  className="w-full py-3 bg-[#94c159] text-white rounded-xl font-medium hover:bg-[#7d9e51] transition"
>
  Choose Plan
</button>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Regular Subscription Pricing */}
      <section className="py-16 bg-white rounded-2xl">
        <h2 className="text-4xl font-bold text-[#94c159] text-center mb-4">
          🧘‍♂️ Regular Transformation Pricing
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Subscription-based plans to support your continuous well-being.
        </p>

        {/* Toggle Monthly / Yearly */}
        <div className="flex justify-center mb-10">
          <button
            className={`px-6 py-2 rounded-l-full border border-[#94c159] ${
              !isYearly ? "bg-[#94c159] text-white" : "bg-white text-[#94c159]"
            }`}
            onClick={() => setIsYearly(false)}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-2 rounded-r-full border border-[#94c159] ${
              isYearly ? "bg-[#94c159] text-white" : "bg-white text-[#94c159]"
            }`}
            onClick={() => setIsYearly(true)}
          >
            Yearly
          </button>
        </div>

        {/* Regular Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {regularPlans.map((plan, index) => {
            const currentPrice = isYearly ? plan.yearly : plan.monthly;
            return (
              <div
                key={index}
                className="bg-[#f4f7f0] p-6 rounded-2xl shadow hover:shadow-lg transition-all"
              >
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-[#94c159] font-bold text-2xl mb-2">
                  ₹{currentPrice}
                  <span className="text-sm text-gray-500">
                    {" "}
                    / {isYearly ? "year" : "month"}
                  </span>
                </p>
                <ul className="text-sm text-gray-700 mb-4 space-y-1">
                  {plan.features.map((feature, i) => (
                    <li key={i}>✅ {feature}</li>
                  ))}
                </ul>
             <button
  onClick={() => handlePayment(plan.name, currentPrice)}
  className="w-full py-3 bg-[#94c159] text-white rounded-xl font-medium hover:bg-[#7d9e51] transition"
>
  Choose Plan
</button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
