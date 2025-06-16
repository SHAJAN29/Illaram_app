"use client";

import { Home_Testimony } from "@/components/Home_Testimony";
import HomeService_section from "@/components/homeService_section";
import Illaram_Journey from "@/components/Illaram_Journey";
import { Join_our_community } from "@/components/Join_our_community";
import "../../app/globals.css";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
// This is a client component

//bg-[url(/img/mountains.jpg)]

// 100% natural and organic products for your hair, skin, and body.

import React from "react";
import Image from "next/image";
import ScrollToTopButton from "@/small_components/scroolButton";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import WhyChooseUs from "app/servicees/component/WhyChooseUS";
import { ExcellenceCard } from "@/components/ExellenceCard";
import RootCauseSection from "@/components/RootCase";
import WeightlossComponent from "@/components/weightloss/WeightlossComponent";
import CorprateWellness from "app/servicees/component/corprateWellness";
import CorprateWellnessCard from "@/components/weightloss/CorprateWellnessCard";
import Pricing from "@/components/subcription/subscribtion";

const Home = () => {
  return (
    <main className=" font-[poppins] bg-[#f4f7f0]">
      <div className="bg-[#f4f7f0] flex flex-col items-center justify-center min-h-screen p-10 pb-20 gap-28 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="heroSection_Image text-left items-center justify-center gap-4 max-sm:mt-25 ">
          {" "}
          <h1 className="text-primary text-[#3b3c3a] font-[poppins] mt-10">
            Are you Ready for {""}
            <span className="text-[#97c25f] font-extrabold">
    <Typewriter
      options={{
        strings: ["Marriage?", "New Beginning?", "Healthier You?"],
        autoStart: true,
        loop: true,
      }}
    />
  </span>{" "}
          </h1>
          <p className="text-gray-500 capitalize pt-10 flex-wrap max-sm:text-[15px] lg:text-2xl max-sm:pt-5">
  Present your most beautiful version with confidence—glowing skin, healthy hair, fit body. All under one subscription.
</p>

         <p className="text-sm max-sm:text-[13px] text-gray-400 mb-5 mt-5 italic">
  Trusted by 1,000+ individuals across India ...
</p>


          <div className=" gap-5 mt-10 max-sm:mt-5">
            <Link
              href={"/signups"}
              className=" bg-[#97c25f] text-white font-semibold lg:mt-10 text-lg px-6 py-4 rounded-2xl  hover:bg-red-500 hover:text-white transition duration-300 ease-in-out"
            >
              Get Started
            </Link>
          </div>


        </div>
 <FontAwesomeIcon icon={faArrowDown}   size="1x" />
      </div>
      <WhyChooseUs />
      <ExcellenceCard />
      
      <WeightlossComponent />
      {/* <RootCauseSection /> */}
      <CorprateWellnessCard/>
      <HomeService_section />
      {/* <Join_our_community /> */}
      <Illaram_Journey />
      <Pricing />
      <Home_Testimony />
      <FAQSection />
      {/* <ScrollToTopButton /> */}
    </main>
  );
};
export default Home;
// Compare this snippet from app/layout.tsx:
