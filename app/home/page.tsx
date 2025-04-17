"use client";

import { Home_Testimony } from "@/components/Home_Testimony";
import HomeService_section from "@/components/homeService_section";
import Illaram_Journey from "@/components/Illaram_Journey";
import { Join_our_community } from "@/components/Join_our_community";
import "../../app/globals.css";
// This is a client component

//bg-[url(/img/mountains.jpg)]

// 100% natural and organic products for your hair, skin, and body.

import React from "react";
import Image from "next/image";
import ScrollToTopButton from "@/small_components/scroolButton";
import FAQSection from "@/components/FAQSection";

const Home = () => {
  return (
    <main className="">
      <div className="bg-primary flex items-center justify-center min-h-screen p-10 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="heroSection_Image text-left items-center justify-center gap-4 max-sm:mt-15 ">
          {" "}
          <h1 className="text-primary font-[poppins] mt-10">
            Welcome to{" "}
            <span className="text-teal-200 font-extrabold">Ilaram</span>{" "}
            Healthcare...
          </h1>
          <p className="text-gray-100 capitalize pt-10 flex-wrap max-sm:text-[15px] lg:text-2xl max-sm:pt-5 ">
            present you'r most beautiful version with confidence infront of your
            partner😊...
          </p>
          <p className="text-sm max-sm:text-[13px] text-gray-200 mb-5 mt-5 italic">
            Trusted by 1,000+ individuals across India preparing for meaningful
            marriages...
          </p>
          <div>
            <button className="btn btn-blue mt-10 lg:mt-10 text-lg px-8 py-4 rounded-2xl  hover:bg-red-500 hover:text-white transition duration-300 ease-in-out">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <HomeService_section />
      <Join_our_community />
      <Illaram_Journey />
      <Home_Testimony />
      <FAQSection />
      {/* <ScrollToTopButton /> */}
    </main>
  );
};
export default Home;
// Compare this snippet from app/layout.tsx:
