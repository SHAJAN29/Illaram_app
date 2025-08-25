"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

const weddingPrograms = [
  {
    title: "100-Day Pre-Wedding Protocol",
    description: "A full reset before your biggest stage.",
    price: 94539,
    duration: "100 days",
    highlights: [
      "Personalized nutrition & training",
      "Skin + hair protocols",
      "Weekly check-ins",
      "Continuous expert access",
      "1 year complimentary subscription",
      "₹10,000 wallet credits",
      "Refund assurance",
    ],
  },
  {
    title: "Beauty Enhancement Program",
    description: "Focused care for skin and hair radiance.",
    price: 89994,
    duration: "100 days",
    highlights: [
      "Skin & hair treatments",
      "Personalized diet & yoga",
      "Continuous expert access",
      "₹10,000 wallet credits",
    ],
  },
  {
    title: "Physical Conditioning Program",
    description: "Strength and endurance, redefined.",
    price: 79994,
    duration: "3 months",
    highlights: [
      "Strength + endurance training",
      "Tailored diet plan",
      "Continuous expert access",
      "₹10,000 wallet credits",
    ],
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
        name: "Ilaram Healthcare",
        description: planName,
        order_id: data.id,
        handler: async function (response: any) {
          toast.success(`🎉 Payment Successful!`);
          try {
            const token = localStorage.getItem("token");
            if (!token) throw new Error("No authentication token found.");

            await fetch("/api/razorPay/payments/save", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                username: username,
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

            router.push(`/user/login?returnTo=/user/dashboard/${username}`);
          } catch (err) {
            toast.error("Error saving payment!");
            console.error(err);
          }
        },
        theme: {
          color: "#111111",
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
    <div className="font-[poppins] bg-white text-[#111] py-24 px-6">
      {/* Wedding Programs */}
      <section className="mb-32">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-6 tracking-tight">
          Wedding Protocols
        </h2>
        <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
          Precision programs designed for life’s most defining stage.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {weddingPrograms.map((plan, index) => (
            <div
              key={index}
              className="border border-gray-200 p-8 rounded-2xl hover:shadow-md transition"
            >
              <h3 className="text-2xl font-light mb-3">{plan.title}</h3>
              <p className="text-2xl font-medium mb-4">₹{plan.price}</p>
              <p className="text-sm text-gray-500 mb-6">{plan.description}</p>
              <ul className="text-sm text-gray-700 mb-8 space-y-2">
                {plan.highlights.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
              <button
                onClick={() => handlePayment(plan.title, plan.price)}
                className="w-full py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition"
              >
                Begin Protocol
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Regular Plans */}
<section className="py-32 px-6 md:px-12 bg-white">
  <h2 className="text-4xl md:text-5xl font-light text-center mb-6 tracking-tight text-black">
     Private Systems
  </h2>
  <p className="text-center text-gray-500 mb-16">
    Continuous systems for staying sharp, strong, and youthful.
  </p>

  {/* Toggle */}
  <div className="flex justify-center mb-20">
    <button
      className={`px-6 py-2 rounded-l-full border border-gray-300 ${
        !isYearly ? "bg-black text-white" : "bg-white text-[#111]"
      }`}
      onClick={() => setIsYearly(false)}
    >
      Monthly
    </button>
    <button
      className={`px-6 py-2 rounded-r-full border border-gray-300 ${
        isYearly ? "bg-black text-white" : "bg-white text-[#111]"
      }`}
      onClick={() => setIsYearly(true)}
    >
      Yearly <span className="ml-1 text-sm">(1 months free)</span>
    </button>
  </div>


  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
    {[
      {
        name: "Essentials",
        price: 3500,
        features: [
          "Monthly doctor consultation",
          "Personalized fitness plan",
          "Monthly nutrition plan",
          "Basic supplement guidance",
          "WhatsApp/text support",
        ],
        ideal:
          "Professionals beginning their wellness journey, needing structure but not intensive hand-holding",
      },
      {
        name: "Core Health+",
        price: 4000,
        features: [
          "Everything in Essentials",
          "Bi-weekly check-ins (video/audio)",
          "Updated meal + fitness plan every 2 weeks",
          "Supplement stack (shipped or prescribed)",
          "1 mental wellness consult/month",
          "App access to resources & habit tracker",
        ],
        ideal:
          "Busy professionals serious about optimizing their lifestyle with expert support",
      },
      {
        name: "Total Wellness Pro",
        price: 5500,
        features: [
          "Everything in Core Health+",
          "Weekly consults (doctor/coach/therapist)",
          "Custom supplement kit delivered monthly",
          "24x7 health chat support",
          "Monthly deep-dive health reports",
          "Access to expert-led webinars & Q&As",
          "Priority support",
        ],
        ideal:
          "Executives, high-performers, and those managing chronic conditions or aggressive fitness goals",
      },
    ].map((plan, i) => {
      const yearlyPrice = plan.price * 11; // 1 months free
      return (
        <div
          key={i}
          className="border border-gray-200 rounded-2xl p-10 bg-white shadow-sm hover:shadow-md transition"
        >
          <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
          <p className="text-xl text-gray-700 mb-6">
            ₹{isYearly ? yearlyPrice.toLocaleString() : plan.price} /{" "}
            {isYearly ? "year" : "month"}
          </p>

          <ul className="text-left mb-6 space-y-2 text-gray-600">
            {plan.features.map((f, idx) => (
              <li key={idx}>• {f}</li>
            ))}
          </ul>

          <p className="text-sm text-gray-500 mb-6">{plan.ideal}</p>

          <button
            onClick={() =>
              handlePayment(plan.name, isYearly ? yearlyPrice : plan.price)
            }
            className="w-full py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-900 transition"
          >
            Experience the System
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
