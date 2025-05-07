// components/WhyChooseUs.tsx

import React from "react";
import Typewriter from "typewriter-effect";
// This is a client component
 import {
        FaUsers,
        FaUserMd,
        FaDumbbell,
        FaAppleAlt,
        FaHeartbeat,
        FaMobileAlt,
        FaStar,
        FaSmileBeam,
      } from "react-icons/fa";
      
      const reasons = [
        {
          icon: <FaStar size={28} />,
          title: "Proven Excellence",
          description: "Years of results-driven wellness success and transformation stories.",
        },
        {
          icon: <FaUsers size={28} />,
          title: "Trusted by 1,000+ Clients",
          description: "A growing community of individuals transforming their lives with Illaram.",
        },
        {
          icon: <FaUserMd size={28} />,
          title: "Expert Medical & Wellness Team",
          description: "Certified doctors, nutritionists, and therapists dedicated to your goals.",
        },
        {
          icon: <FaDumbbell size={28} />,
          title: "Tailored Fitness & Yoga Programs",
          description: "Integrated physical coaching for strength, flexibility, and endurance.",
        },
        {
          icon: <FaAppleAlt size={28} />,
          title: "Custom Nutrition & Lifestyle Plans",
          description: "Deeply personalized routines designed around your health type.",
        },
        {
          icon: <FaHeartbeat size={28} />,
          title: "Holistic Healing & Supplements",
          description: "Targeted support through curated supplementation and internal balance.",
        },
        {
          icon: <FaMobileAlt size={28} />,
          title: "Seamless Mobile Experience",
          description: "Track your health, book experts, and measure progress — all in one app.",
        },
        {
          icon: <FaSmileBeam size={28} />,
          title: "Real Client Transformations",
          description: "From doubt to confidence — stories of lasting beauty and strength.",
        },
      ];
      

const WhyChooseUs = () => {
    const loopedReasons = [...reasons, ...reasons];
  
    return (
      <section className=" py-14 overflow-hidden">
    
  
        <div className="relative w-full">
          <div className="flex gap-20 animate-marquee whitespace-nowrap  w-max hover:paused">
            {loopedReasons.map((reason, index) => (
              <div
                key={index}
                className="flex flex-col items-center min-w-[180px] backdrop-blur-md bg-white/60 border border-white/30 rounded-xl  px-4 py-6 "
              >
                <div className=" illaramAccent mb-3">{reason.icon}</div>
                <p className="text-[15px] font-medium text-gray-700 text-center">
                  {reason.title}
                </p>
              </div>
            ))}
          </div>
        </div> 
      </section>
    );
  };
  
  export default WhyChooseUs;