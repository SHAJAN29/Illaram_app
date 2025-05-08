"use client";
import React from "react";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const steps = [
  {
    title: "Sign Up Effortlessly",
    description: "Register as an affiliate in just a few steps and get your unique referral link.",
  },
  {
    title: "Share with Impact",
    description: "Promote our premium health services through your audience or network.",
  },
  {
    title: "Earn Generously",
    description: "Enjoy industry-leading commissions on every successful referral.",
  },
];

const AffiliatePage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white text-gray-800">
      <section className="max-w-7xl mt-15 mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-[#0F766E]">
          Partner with Illaram <br /> 
        </h1>
        <h3  className="text-[#FF5F37] text-2xl">Earn. Empower. Elevate.</h3>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
          Join our exclusive affiliate program and help spread holistic wellness while earning generous rewards.
        </p>

        {/* Steps */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition duration-300 text-left"
            >
              <div className="text-5xl text-[#0F766E] font-bold mb-4">{index + 1}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <Link
            href="/Affiliates/AffiliateSignups"
            className="inline-block bg-[#FF5F37] hover:bg-[#e94d28] transition-all text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg"
          >
          
            Apply as an Affiliate
          </Link>
          <p className="mt-4 text-sm text-gray-500">No fees. No obligations. Just rewards for your influence.</p>
          <p className="mt-4 uppercase text-sm font-bold text-gray-500">for more information contat us.</p>

        </div>
      </section>
    </main>
  );
};

export default AffiliatePage;
