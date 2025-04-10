import Link from "next/link";
import React from "react";
import { MdHome } from "react-icons/md";
import RootCauseCarousel from "./RootCarosel";

const RootCauseSection = () => {
  return (
    <section className="container mx-auto py-16">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Image or Illustration */}

        {/* Right Side - Text Content */}
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold illaramPrimary mb-4">
            We Address the Root Cause
          </h2>
          <p className="text-gray-600  mb-4">
            At Illaram, we don’t just treat symptoms. Whether it's hormonal
            imbalance, fertility issues, fat retention, or skin conditions — we
            go deeper.
          </p>
          <ul className="list-disc pl-5 text-gray-400 space-y-2">
            <li>Understanding your body type and imbalances.</li>
            <li>Customized physical & emotional healing plans.</li>
            <li>Internal strengthening, Permenent cure.</li>
          </ul>
        </div>
      </div>

      <RootCauseCarousel />
    </section>
  );
};

export default RootCauseSection;
