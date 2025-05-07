import Link from "next/link";
import React from "react";
import { MdHealing, MdHome } from "react-icons/md";
import RootCauseCarousel from "./RootCarosel";
import { FaCheckCircle } from "react-icons/fa";

const RootCauseSection = () => {
  return (
    <section className="container  mx-auto py-16">
      <div className="flex flex-col justify-center md:flex-row items-center gap-10">
        {/* Left Side - Image or Illustration */}

        {/* Right Side - Text Content */}
        <div className="w-full md:w-2/3">


        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6 leading-tight">
            <span className="inline-flex items-center gap-2 text-illaramPrimary">
              
              We Address the Root Cause
            </span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            At Illaram, we don’t just treat symptoms. Whether it's <span className="font-bold illaramPrimary"> hormonal
            imbalances, fertility issues, fat retention, or skin conditions</span> —
            we go deeper to identify and solve the actual root cause.
          </p>
          <ul className="space-y-3">
            {[
              "Understanding your body type and imbalances.",
              "Customized physical & emotional healing plans.",
              "Internal strengthening for permanent results.",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-700">
                <FaCheckCircle className="text-teal-500 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <RootCauseCarousel />
    </section>
  );
};

export default RootCauseSection;


{/* <p className="text-gray-700 text-base leading-relaxed">
Illaram Healthcare helps adults manage their well-being with doctors, fitness-trainers,healthcanre and body supplements, and progress tracking — all in one platform.
</p> */}