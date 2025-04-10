"use client";

import { useState } from "react";
import Image from "next/image";
import { title } from "process";
import React from "react";
import "../../app/globals.css";
import { Card } from "@material-tailwind/react";
import Hair_Fall_Queries from "@/small_components/Hair_Fall_Queries";
import ReviewCarousel from "@/small_components/ReviewCarousel";

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
            "Take control of your future with Illaram Healthcare. We empower you
            to be the chooser, not just an option..."
          </p>
          <button className="bg-[#ff5f37] hover:bg-[#ff4437] cursor-pointer text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Start Your Journey
          </button>
        </div>

        <div>
          <h1 className="gap-5 max-sm:text-[18px] mb-6 text-3xl font-bold lg:text-5xl mx-auto bg-gradient-to-b from-[#ff3f3f] to-[#fdb07d] text-transparent bg-clip-text">
            Illaram Healthcare - Pre-Marriage Preparation Services
          </h1>
          <p className="paraGraph text-illaramPrimar max-sm:text-[15px]">
            At Illaram Healthcare, we understand that marriage is one of the
            most significant milestones in life. To ensure you step into this
            new chapter feeling your absolute best, we offer a comprehensive,
            holistic approach to pre-marriage preparation. Our tailored programs
            are designed to help you be fully prepared—physically, mentally, and
            emotionally—for a healthy, fulfilling marital journey.
          </p>
        </div>
        <div>
          <h1 className="text-left underline gap-4 pb-5 max-sm:text-[18px] text-[#0F766E]">
            Our Services Include
          </h1>

          {servicelist.map((service, index) => (
            <li key={index} className="flex flex-col gap-5 pt-6 text-left ">
              <h2 className=" capitalize text-[#ff5f37] lg:text-5xl max-sm:text-[18px]">
                {"#  "}
                {service.title}
              </h2>

              {/* <Image
                  src={`/assets/servicees/${index + 1}.jpg`}
                  alt=""
                  width={400}
                  height={400}
                  className="rounded-2xl max-sm:w-[300px] lg:w-[500px] h-auto"
                /> */}

              <p className="paraGraph max-sm:text-[15px] md:text-2xl lg:text-3xl">
                {service.serv_describe}
              </p>
            </li>
          ))}
        </div>
        <div>
          <h2 className="gap-5 mb-5 max-sm:text-[18px] text-[#0F766E] font-bold">
            Why Choose Illaram Healthcare?
          </h2>

          <p className="paraGraph max-sm:text-[15px] md:text-2xl lg:text-3xl">
            At Illaram Healthcare, we believe that a well-rounded approach to
            preparation is the key to a happy, successful marriage. Our services
            are 100% personalized, <br />
            ensuring that every aspect of your journey is thoughtfully
            addressed. Whether you need to enhance your physical health, mental
            clarity, or emotional resilience, <br />
            we provide the tools and support you need to embark on your marital
            journey confidently and stress-free. <br />
            Let us help you start this exciting new chapter in the best possible
            way. Contact us today to learn more about how we can help you
            prepare for a healthy, happy, and fulfilling marriage.
          </p>
        </div>
        <Card
          placeholder={""}
          onPointerEnterCapture={""}
          onPointerLeaveCapture={""}
          className="h-60 mb-15 mt-10 gap-28 bg-gray-100 items-center text-center rounded-2xl max-sm:w-full md:w-[30rem] lg:w-[40rem] p-2 "
          shadow={true}
        >
          <div className="p-4 flex flex-col items-center justify-center gap-4">
            <h3 className="text-lg font-bold capitalize px-20">any quries</h3>
            <p className="text-sm text-gray-600 mb-4">
              We are here to help you with any questions or concerns you may
              Feel free to contact,experts clearify all your oubts.
            </p>
            <a
              href="tel:7904118829"
              className="bg-[#ff5f37] hover:bg-[#ff4437] cursor-pointer text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-block text-center"
            >
              Free Consultation
            </a>
          </div>
        </Card>
      </div>

      <div className="flex flex-col text-center items-center justify-center gap-4 ">
        {/* signup     <Hair_Fall_Queries /> */}
        <ReviewCarousel />
      </div>
    </div>
  );
};

export default servicees;
// Compare this snippet from app/layout.tsx:
