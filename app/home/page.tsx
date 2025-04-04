"use client";

import { Home_Testimony } from "@/components/Home_Testimony";
import { HomeService_section } from "@/components/homeService_section";
import Illaram_Journey from "@/components/Illaram_Journey";
import { Join_our_community } from "@/components/Join_our_community";
// This is a client component

//bg-[url(/img/mountains.jpg)]

import React from "react";

const Home = () => {
  return (
    <main className="">
      <div className="bg-primary flex items-center justify-center min-h-screen p-10 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="heroSection_Image text-center items-center justify-center gap-4 ">
          {" "}
          <h1 className=" text-primary lg:text-9xl text-5xl md:text-6xl font-extrabold dark:text-white  from-neutral-500">
            Are you ready for Marriage?
          </h1>
          <p className="mt-10 lg:text-2xl text-lg font-normal font-stretch-90% dark:text-white  from-neutral-100">
            We help you prepare both for Marriage😊...
          </p>
          <div>
            <button className="btn btn-blue mt-10 lg:mt-20 text-lg px-8 py-4 rounded-2xl  hover:bg-red-500 hover:text-white transition duration-300 ease-in-out">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <HomeService_section />
      <Home_Testimony />
      <Illaram_Journey />
      <Join_our_community />
    </main>
  );
};
export default Home;
// Compare this snippet from app/layout.tsx:
