"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { plans } from "@/constants/index";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const router = useRouter();


  const handlePayment = () => {
router.push(`/user/login?plan=${isYearly ? "yearly" : "monthly"}`);
  };


  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-4xl font-bold text-[#94c159] mb-4">Our Pricing Plans</h2>
      <p className="text-gray-600 mb-8">Choose a plan that fits your transformation journey.</p>

      {/* Toggle */}
      <div className="flex justify-center mb-12">
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

      {/* Plan Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, idx) => {
          const currentPrice = isYearly ? plan.yearly : plan.monthly;
          return (
            <div
              key={idx}
              className="relative bg-[#f4f7f0] border border-gray-200 shadow-md rounded-2xl p-6 text-left hover:shadow-xl transition-all duration-300"
            >
              {plan.name === "Standard" && (
                <div className="absolute top-0 right-0 bg-[#94c159] text-white px-3 py-1 rounded-bl-xl">
                  Popular
                </div>
              )}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold text-[#94c159] mb-4">
                ₹{currentPrice}
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
                onClick={handlePayment}
                className="w-full py-3 bg-[#94c159] text-white rounded-xl font-medium hover:bg-[#7d9e51] transition"
              >
                Choose Plan
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
