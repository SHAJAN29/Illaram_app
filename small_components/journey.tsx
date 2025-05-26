"use client";

import React, { ReactNode } from "react";
import {
  MdCall,
  MdAssignment,
  MdFavorite,
} from "react-icons/md";

interface JourneyStep {
  icon: ReactNode;
  step: number;
  title: string;
  description: string;
  time: string;
  image: string;
}

const TraJourney = () => {
  const illaramJourney: JourneyStep[] = [
    {
      step: 1,
      title: "Call for Consultation",
      description:
        "Start by calling us for a free consultation. Our experts will help clarify all your doubts and guide you through the process.",
      time: "Takes 5–10 minutes",
      image: "/files/assessment_image.png",
      icon: <MdCall className="text-4xl text-[#97c25f]" />,
    },
    {
      step: 2,
      title: "Customized Wellness Plan",
      description:
        "In a live session health assessment, our experts will recommend a customized wellness plan tailored to your specific needs and goals.",
      time: "Takes 10–15 minutes to review",
      image: "/files/wellness_plan_image.png",
      icon: <MdAssignment className="text-4xl text-[#97c25f]" />,
    },
    {
      step: 3,
      title: "Here You Go",
      description:
        "Once you begin the plan, Illaram Healthcare takes care of everything else. We'll be with you every step of the way.",
      time: "Ongoing support over 3–6 months",
      image: "/files/support_image.png",
      icon: <MdFavorite className="text-4xl text-[#97c25f]" />,
    },
  ];

  return (
    <section className="bg-[#f4f7f0] py-16 px-6 font-poppins">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#97c25f] mb-4">
          Your <span className="text-gray-800">Wellness Journey</span>  with Illaram
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          A simple 3-step process to help you reach lasting transformation with expert guidance.
        </p>
      </div>

      <div className="space-y-8">
        {illaramJourney.map((step) => (
          <JourneyCard key={step.step} step={step} />
        ))}
      </div>
    </section>
  );
};

const JourneyCard = ({ step }: { step: JourneyStep }) => {
  return (
     <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-[#e0e8d8] flex justify-between items-center px-5 py-4">
      {/* Left: Text Content */}
      <div className="flex-1 pr-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{step.title}</h3>
        <p className="text-gray-600 text-sm">{step.description}</p>
        <p className="text-gray-400 text-sm mt-1">{step.time}</p>
      </div>

      {/* Right: Icon */}
      <div className="text-[#97c25f] text-3xl flex-shrink-0">
        {step.icon}
      </div>
    </div>
  );
};

export default TraJourney;
