"use client";

import React from "react";
import { Service_card_details } from "../constants";
import { CardDefault } from "../small_components/service_card";

const choser = [
  {
    title: "Science-Backed",
    description: "Our methods are rooted in medical science and guided by clinical research.",
  },
  {
    title: "Holistic Approach",
    description: "We treat the whole person—mind, body, and spirit—using integrative techniques.",
  },
  {
    title: "Lasting Results",
    description: "No quick fixes—just real, sustainable transformation you can see and feel.",
  },
];

const HomeService_section = () => {
  return (
    <section className="font-poppins px-6 py-16 bg-[#f4f7f0]">
      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-14">
        <h1 className="text-4xl font-bold text-[#97c25f] mb-4">Wedding Wellness Plans</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          At Illaram, we believe every individual is unique. Our specialized packages are crafted for adults preparing for marriage, emphasizing holistic well-being —{" "}
          <span className="text-[#97c25f] font-semibold">inside and out. 100% natural.</span>
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {Service_card_details.map(({ title, description, image, pageLink }, index) => (
          <CardDefault
            key={index}
            title={title}
            image={image}
            pageLink={pageLink}
            description={description}
          />
        ))}
      </div>

      {/* Why Illaram Section */}
      <section className="mt-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why <span className="text-[#97c25f]">Illaram?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {choser.map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 border border-[#e0e8d8]"
            >
              <h3 className="text-xl font-semibold mb-3 text-[#97c25f]">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default HomeService_section;
