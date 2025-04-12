"use client";

import { useState } from "react";
import Image from "next/image";
import { title } from "process";
import React from "react";
import "../../app/globals.css";
import { Card } from "@material-tailwind/react";
import Hair_Fall_Queries from "@/small_components/Hair_Fall_Queries";
import ReviewCarousel from "@/small_components/ReviewCarousel";
import ServicesSection from "@/components/serviceSection";
import ServicesSectionCopy from "@/components/ServicesSectionCopy";
import CTASection from "@/components/CTASection";

const servicees = () => {
  const servicelist = [
    {
      title: "Physical Condationing Program",
      serv_describe:
        "Our physical conditioning program focuses on building strength, improving endurance, and boosting overall fitness. We tailor the program to your specific needs, ensuring you feel strong and energized for your wedding day and beyond. With a combination of exercise routines, recovery techniques, and nutritional guidance, we help you achieve your best physical self.",
    },
    {
      title: "Beauty Enhancement Program",
      serv_describe:
        " Feel radiant and confident as you prepare for your big day with our beauty enhancement program. We offer personalized skincare, haircare, and grooming services to help you look and feel your best. From rejuvenating facials to professional makeup techniques, our experts ensure you’re glowing inside and out. ",
    },
    {
      title: "The 100-day pre-wedding program ",
      serv_describe:
        "The 100-day pre-wedding treatment program is a comprehensive plan designed to help individuals prepare physically and mentally for their wedding day. Over the course of 100 days, the program focuses on improving fitness, enhancing overall health, and boosting confidence. It typically includes personalized fitness routines, nutritional guidance, skincare treatments, stress management techniques, and mental wellness practices. The goal is to ensure the bride and groom feel their best, both physically and emotionally, leading up to their big day. This holistic approach helps achieve a balanced, rejuvenated, and confident version of oneself for the wedding day.",
    },
  ];

  return (
    <>
      <div className=" min-h-screen p-8 pb-20 gap-16  lg:p-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="flex lg:px-40 flex-col flex-wrap gap-10 items-center  justify-center text-left">
          <div className="heroSection_Image flex flex-col min-h-screen text-center items-center justify-center mt-0">
            <h1 className="text-5xl uppercase font-[poppins] md:text-8xl lg:text-9xl font-bold text-[#0F766E]">
              Be A Choser
            </h1>
            <h3 className="text-[#0F766E] max-sm:text-2xl md:text-5xl lg:text-7xl mb-6 font-bold">
              NOT AN OPTION
            </h3>
            <p className="text-gray-600 max-sm:text-[15px] md:text-2xl mb-6">
              "Take control of your future with Illaram Healthcare. We empower
              you to be the chooser, not just an option..."
            </p>
            <button className="bg-[#ff5f37] hover:bg-[#ff4437] cursor-pointer text-white font-bold py-3 px-6 rounded-full transition duration-300">
              Start Your Journey
            </button>
          </div>

          <div>
            <h1 className="gap-5 max-sm:text-[18px] mb-6 text-3xl font-bold lg:text-5xl mx-auto text-transparent bg-clip-text">
              <span className="illaramPrimary">Illaram Healthcare</span>{" "}
              <span className="font-extrabold illaramText"> - </span>
              <span className="illaramAccent">
                {" "}
                Pre-Marriage Preparation Services{" "}
              </span>
            </h1>
            <p className="paraGraph text-illaramPrimar max-sm:text-[15px]">
              You’ve spent years building your career, chasing goals, surviving
              deadlines, and scrolling through highlight reels. But somewhere
              along the way… you forgot you. <br /> The late nights, the skipped
              meals, the silent stress—it’s all built up inside your body and
              mind. <br />
              Many young men and women delay marriage because they’ve lost
              confidence in their appearance, struggle with health issues like
              hormonal imbalance or low fertility,Hair_Fall ,skin problems
              ,etc... <br /> At Illaram Healthcare, we understand that.That’s
              why we created something more than a program—it’s a
              transformation. One that helps you reconnect with your body, heal
              your mind, and prepare your heart for love that lasts. <br />{" "}
              <span className="font-bold illaramAccent">
                Because marriage isn’t about one perfect day — it’s about a
                lifetime after.
              </span>
            </p>
          </div>

          <div>
            <ServicesSectionCopy />
            <ServicesSection />
          </div>

          <div>
            <CTASection />
          </div>
        </div>

        <ReviewCarousel />
      </div>
      <div className="flex flex-col text-center items-center justify-center gap-4 ">
        {/* signup     <Hair_Fall_Queries /> */}
        <div className="p-4 flex flex-col items-center bg-gray-100 justify-center gap-4 max-sm:w-full md:w-full w-full">
          <h3 className="text-3xl font-bold illaramPrimary capitalize px-20">
            any quries
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            We are here to help you with any questions or concerns you may Feel
            free to contact,experts clearify all your oubts.
          </p>
          <a
            href="tel:7904118829"
            className="bg-[#ff5f37] hover:bg-[#ff4437] cursor-pointer text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-block text-center"
          >
            Free Consultation
          </a>
        </div>
      </div>
    </>
  );
};

export default servicees;
// Compare this snippet from app/layout.tsx:

// {/* <div>
// <h1 className="text-left underline gap-4 pb-5 max-sm:text-[18px] text-[#0F766E]">
//   Our Services Include
// </h1>

// {servicelist.map((service, index) => (
//   <li key={index} className="flex flex-col gap-5 pt-6 text-left ">
//     <h2 className=" capitalize text-[#ff5f37] lg:text-5xl max-sm:text-[18px]">
//       {"#  "}
//       {service.title}
//     </h2>

//     {/* <Image
//         src={`/assets/servicees/${index + 1}.jpg`}
//         alt=""
//         width={400}
//         height={400}
//         className="rounded-2xl max-sm:w-[300px] lg:w-[500px] h-auto"
//       /> */}

//     <p className="paraGraph max-sm:text-[15px] md:text-2xl lg:text-3xl">
//       {service.serv_describe}
//     </p>
//   </li>
// ))}
// </div> */}
