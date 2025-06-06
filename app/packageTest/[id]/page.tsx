"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import { plans } from "@/constants/index";

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

const weddingPrograms: WeddingPlan[] = [
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

// const plans: RegularPlan[] = [
//   {
//     name: "Basic",
//     monthly: 2899,
//     yearly: 2399 * 12 - 2000,
//     features: ["Consultation", "Basic Care", "Email Support"],
//   },
//   {
//     name: "Standard",
//     monthly: 3599,
//     yearly: 3299 * 12 - 3000,
//     features: ["Advanced Care", "Priority Support", "Diet Plans"],
//   },
//   {
//     name: "Premium",
//     monthly: 5599,
//     yearly: 5299 * 12 - 5000,
//     features: ["Complete Transformation", "1:1 Coaching", "24/7 Access"],
//   },
// ];

const Programs = () => {
  const params = useParams();
  const router = useRouter();
  const [isYearly, setIsYearly] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

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

  const validateCoupon = () => {
    if (coupon.trim().toUpperCase() === "ILARAM10") {
      setDiscount(0.1); // 10% discount
      setAppliedCoupon("ILARAM10");
      toast.success("Coupon applied! 10% discount activated.");
    } else {
      setDiscount(0);
      setAppliedCoupon(null);
      toast.error("Invalid coupon code.");
    }
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
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY || "",
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
                username,
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
    <div className="font-[poppins] bg-gradient-to-br from-[#f4f7f0] via-white to-[#f4f7f0] py-20">
      {/* Marquee */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="animate-marquee whitespace-nowrap overflow-hidden">
          <div className="inline-block animate-marquee-inner">
            <p className="text-[#94c159] font-medium">
              100% Satisfaction Guarantee!&nbsp;&nbsp;&nbsp;100% money back guarantee!
            </p>
          </div>
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .animate-marquee {
            display: flex;
            overflow: hidden;
            position: relative;
          }
          .animate-marquee-inner {
            display: inline-block;
            white-space: nowrap;
            animation: marquee 10s linear infinite;
          }
        `}</style>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-6">Exclusive wellness plans</h2>
        <p className="text-lg text-center text-[#a9aba6] mb-6">
          You're making a great decision,{" "}
          <span className="text-[#94c159] font-semibold">{username}</span>. Each program is crafted to help you thrive and grow.
        </p>
        <p className="text-lg text-center text-[#a9aba6] mb-14">
          Experienced doctors, psychiatrists, nutritionists, fitness trainers, and wellness coaches are here to help you achieve your goals.{" "}
          <span className="text-[#94c159] font-semibold">Transformation made easy</span>.
        </p>

        {/* Wedding Programs */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-[#94c159] mb-4">💍 Exclusive Wedding Wellness Pricing</h2>
          <p className="text-center text-[#7a7a7a] mb-10 max-w-2xl mx-auto">
            Perfectly tailored programs to help you shine on your big day.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {weddingPrograms.map((plan, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all">
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

        {/* Coupon Input for Regular Plans */}
        <section className="py-16 bg-white rounded-2xl max-w-7xl mx-auto mb-8">
          <h2 className="text-4xl font-bold text-[#94c159] text-center mb-4">🧘‍♂️ Regular Transformation Pricing</h2>
          <p className="text-gray-600 text-center mb-8">Subscription-based plans to support your continuous well-being.</p>

          <div className="flex justify-center mb-6">
            <input
              type="text"
              placeholder="Enter coupon code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="border border-gray-300 rounded-l-full px-4 py-2 w-48 focus:outline-none"
            />
            <button
              onClick={validateCoupon}
              className="bg-[#94c159] text-white px-6 py-2 rounded-r-full font-semibold hover:bg-[#7d9e51] transition"
            >
              Apply
            </button>
          </div>

          {appliedCoupon && (
            <p className="text-center text-green-600 mb-6 font-semibold">
              Coupon <span className="uppercase">{appliedCoupon}</span> applied! You get {discount * 100}% off.
            </p>
          )}

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

     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
  {plans.map((plan, idx) => {
    const originalPrice = isYearly ? plan.yearly : plan.monthly;
    const discountedPrice = Math.round(originalPrice * (1 - discount));

    return (
      <div
        key={idx}
        className="relative bg-[#f4f7f0] border border-gray-200 shadow-md rounded-2xl p-6 text-left hover:shadow-xl transition-all duration-300"
      >
        {/* Popular Badge for Standard Plan */}
        {plan.name === "Standard" && (
          <div className="absolute top-0 right-0 bg-[#94c159] text-white px-3 py-1 rounded-bl-xl text-sm font-medium">
            Popular
          </div>
        )}

        <h3 className="text-xl font-semibold text-gray-800 mb-4">{plan.name}</h3>

        <p className="text-3xl font-bold text-[#94c159] mb-4">
          ₹
          {discount > 0 ? (
            <>
              <span className="line-through text-gray-400 mr-2 text-lg">{originalPrice}</span>
              {discountedPrice}
            </>
          ) : (
            originalPrice
          )}
          <span className="text-sm text-gray-500"> / {isYearly ? "year" : "month"}</span>
        </p>

        <ul className="space-y-2 mb-6">
          {plan.features.map((feature, i) => (
            <li key={i} className="text-gray-600 flex items-center">
              ✅ <span className="ml-2">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handlePayment(plan.name, discountedPrice)}
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

      {/* Footer */}
      <div className="mt-16 flex justify-center items-center bg-[#f4f7f0]">
        <div>
          <h5 className="text-3xl font-bold capitalize text-center text-gray-800 mb-6 px-5 tracking-tight">
            A healthy person has a thousand dreams 😃, an unhealthy person has only one dream 😔 — My Body.
          </h5>
          <p className="text-lg text-center font-semibold text-[#a9aba6] max-w-2xl mx-auto leading-relaxed">
            Prevent yourself from being sick and unhealthy. Live a happy life with your loved ones.
          </p>
          <p className="text-lg text-center uppercase text-[#a9aba6] max-w-2xl mx-auto mt-3 mb-14 leading-relaxed">
            The choice is yours, <span className="text-[#94c159] font-semibold">{username}</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
