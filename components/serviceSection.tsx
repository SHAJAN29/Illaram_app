"use client";
import React from "react";

const services = [
  {
    title: "100-Day Pre-Wedding Transformation",
    subtitle: "Look and feel your best—inside and out.",
    painPoints: [
      "I don’t feel confident about my looks.",
      "I want to be physically fit for my wedding day.",
      "I want my partner to see the best version of me.",
    ],
    features: [
      "Personalized fitness & nutrition",
      "Mental wellness coaching",
      "Skin, sleep & stress management",
      "Holistic transformation roadmap",
    ],
    quote: "We help you glow with health and confidence before your big day.",
    emoji: "💍",
  },
  {
    title: "Physical Conditioning & Fertility Wellness",
    subtitle: "Boost your health & future family readiness.",
    painPoints: [
      "I’m worried about fertility issues.",
      "My lifestyle is affecting my health.",
      "We want to prepare for a healthy future together.",
    ],
    features: [
      "Fitness plans for reproductive health",
      "Hormonal balance & stress-reduction",
      "Pre-conception health optimization",
      "Guided lifestyle upgrades",
    ],
    quote: "Strong marriages start with strong bodies and better health.",
    emoji: "💪",
  },
  {
    title: "Personality & Relationship Readiness",
    subtitle: "Grow emotionally before stepping into marriage.",
    painPoints: [
      "I struggle with communication in relationships.",
      "I fear arguments or misunderstandings.",
      "I want to understand myself and my partner better.",
    ],
    features: [
      "Emotional intelligence training",
      "Conflict-resolution strategies",
      "Personality development",
      "Relationship mindset coaching",
    ],
    quote: "Your relationship will only be as healthy as your mindset.",
    emoji: "🌱",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 font-[poppins]">
          Our <span className="illaramAccent"> Transformation</span> Services
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Tailored wellness to elevate your body and mind before marriage.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="text-3xl mb-2">{service.emoji}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-500 mb-4">{service.subtitle}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-sm text-gray-700 mb-1">
                  Common Pain Points:
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {service.painPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-sm text-gray-700 mb-1">
                  What You Get:
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <blockquote className="text-sm italic text-blue-600 border-l-4 border-blue-300 pl-4">
                “{service.quote}”
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
// // Compare this snippet from app/servicees/page.tsx:
