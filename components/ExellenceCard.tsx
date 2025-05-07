"use client";
import React, { useEffect, useRef, useState } from "react";
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

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <section className="bg-gray-50 rounded-3xl p-10 max-w-5xl mx-auto my-20 text-center">
      <div className="mb-6">
        <h2 className="text-5xl font-bold capitalize text-[#0F766E]">
        trusted <span className="illaramAccent">healthcare</span>  plartform
        </h2>
        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          We help adults achieve long-term health through <span className="font-semibold">expert guidance, personalized plans, and consistent tracking — all in one place.</span> 
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-10">
        {excellenceStats.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            {typeof item.value === "number" ? (
              <Counter target={item.value} />
            ) : (
              <div className="text-2xl font-bold text-teal-700">{item.value}</div>
            )}
            <p className="mt-2 text-gray-600 font-medium">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <button
          onClick={handleClick}
          className="btn btn-blue font-bold py-2 px-4 rounded-full transition duration-300 hover:bg-teal-700"
        >
          {clicked ? "You clicked me!" : "Click me to toggle"}
        </button>
      </div>
    </section>
  );
};
