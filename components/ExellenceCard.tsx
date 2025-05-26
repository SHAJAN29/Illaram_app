"use client";
import React, { useState } from "react";
import Counter from "./ExelenceCounter/Counter";

const excellenceStats = [
  { value: 1000, label: "Lives Transformed" },
  { value: 50, label: "Expert Doctors & Coaches" },
  { value: 200, label: "Custom Wellness Plans" },
  { value: "Unlimited", label: "Fitness & Yoga Sessions" },
  { value: "Unlimited", label: "Nutrition Guidance" },
  { value: "1 App", label: "All-in-One Health Tracking" },
];

export const ExcellenceCard = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked(!clicked);

  return (
    <section className="rounded-3xl p-10 max-w-5xl mx-auto my-20 text-center" style={{ backgroundColor: "#f4f7f0" }}>
      <div className="mb-6">
        <h2 className="text-5xl font-bold capitalize" style={{ color: "#97c25f" }}>
          trusted <span className="font-semibold text-gray-700">healthcare</span> platform
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-gray-500">
          We help adults achieve long-term health through{" "}
          <span className="font-semibold text-gray-700">
            expert guidance, personalized plans, and consistent tracking — all in one place.
          </span>
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-10">
        {excellenceStats.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            {typeof item.value === "number" ? (
              <div className="text-[#d8ddd1]" style={{ color: "#97c25f" }}>
                <Counter target={item.value} />
              </div>
            ) : (
              <div className="text-2xl font-bold " style={{ color: "#97c25f" }}>
                {item.value}
              </div>
            )}
            <p className="mt-2 text-gray-500 font-medium">{item.label}</p>
          </div>
        ))}
      </div>

  
    </section>
  );
};
