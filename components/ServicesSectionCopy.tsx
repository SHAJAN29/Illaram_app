// components/ServicesSection.tsx
"use client";

import { FaSpa, FaHeartbeat, FaWeight, FaLeaf, FaStar } from "react-icons/fa";

const services = [
  {
    icon: <FaSpa className="text-pink-500 text-3xl" />,
    title: "Hair Care",
    description: "Glow-up from root to tip with custom hair rituals.",
  },
  {
    icon: <FaStar className="text-yellow-400 text-3xl" />,
    title: "Skin Care",
    description: "Radiant skin routines curated for wedding-ready glow.",
  },
  {
    icon: <FaHeartbeat className="text-red-500 text-3xl" />,
    title: "Fertility Boost",
    description: "Reproductive wellness programs backed by modern science.",
  },
  {
    icon: <FaWeight className="text-green-600 text-3xl" />,
    title: "Fat Loss Coaching",
    description: "Targeted body transformation for optimal confidence.",
  },
  {
    icon: <FaLeaf className="text-emerald-500 text-3xl" />,
    title: "Body Cleansing Detox",
    description: "Internal reset to clear toxins and boost energy.",
  },
  {
    icon: <FaSpa className="text-purple-500 text-3xl" />,
    title: "Stress Management",
    description: "Mindfulness and relaxation techniques for inner peace.",
  },
  {
    icon: <FaHeartbeat className="text-blue-500 text-3xl" />,
    title: "Fitness Coaching",
    description: "Personalized workout plans for strength and endurance.",
  },
  {
    icon: <FaStar className="text-orange-500 text-3xl" />,
    title: "Nutrition Guidance",
    description: "Balanced meal plans for optimal health and vitality.",
  },

  {
    icon: <FaLeaf className="text-indigo-500 text-3xl" />,
    title: "Personalized Plans",
    description: "Tailored programs for individual needs and goals.",
  },

  {
    icon: <FaStar className="text-pink-600 text-3xl" />,
    title: "Grooming Services",
    description: "Professional grooming for the modern groom.",
  },
];

export default function ServicesSectionCopy() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Our <span className="illaramPrimary">Program</span> Includes
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Tailored wellness to elevate your body and mind before marriage.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
        <button className="mt-12 bg-black text-white py-3 px-8 rounded-full text-lg hover:bg-gray-800 transition">
          Explore Programs
        </button>
      </div>
    </section>
  );
}
