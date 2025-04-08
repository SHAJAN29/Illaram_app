"use client";

import { Home_Testimony } from "@/components/Home_Testimony";
import HomeService_section from "@/components/homeService_section";
import Illaram_Journey from "@/components/Illaram_Journey";
import { Join_our_community } from "@/components/Join_our_community";
// This is a client component

//bg-[url(/img/mountains.jpg)]

// 100% natural and organic products for your hair, skin, and body.

import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <main className="">
      <div className="bg-primary  flex items-center justify-center min-h-screen p-10 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="heroSection_Image text-center items-center justify-center gap-4 max-sm:mt-15 ">
          {" "}
          <h1 className=" text-primary lg:text-9xl text-5xl md:text-7xl font-extrabold dark:text-white  from-neutral-500">
            Are you ready for Marriage?
          </h1>
          <p className="pt-10 flex-wrap lg:text-2xl max-sm:pt-5  text-lg font-normal dark:text-gray-600  from-gray-600">
            We help you prepare for marriage with a holistic approach to health
            and wellness😊...
          </p>
          <p className="pt-5 flex-wrap lg:text-2xl text-lg max-sm:text-[15px] font-bold dark:text-[#331313] uppercase from-red-600">
            1000+ life changed
          </p>
          <div>
            <button className="btn btn-blue mt-10 lg:mt-20 text-lg px-8 py-4 rounded-2xl  hover:bg-red-500 hover:text-white transition duration-300 ease-in-out">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <HomeService_section />
      <Join_our_community />
      <Illaram_Journey />
      <Home_Testimony />
    </main>
  );
};
export default Home;
// Compare this snippet from app/layout.tsx:
