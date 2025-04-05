"use client";

import Image from "next/image";
import { title } from "process";
import React from "react";

const servicees = () => {
  const servicelist = [
    {
      title: "Physical Condationing Program",
      serv_describe:
        "Our physical conditioning program focuses on building strength, improving endurance, and boosting overall fitness. We tailor the program to your specific needs, ensuring you feel strong and energized for your wedding day and beyond. With a combination of exercise routines, recovery techniques, and nutritional guidance, we help you achieve your best physical self",
    },
    {
      title: "Beauty Enhancement Program",
      serv_describe:
        " Feel radiant and confident as you prepare for your big day with our beauty enhancement program. We offer personalized skincare, haircare, and grooming services to help you look and feel your best. From rejuvenating facials to professional makeup techniques, our experts ensure you’re glowing inside and out ",
    },
    {
      title: "The 100-day pre-wedding program ",
      serv_describe:
        "The 100-day pre-wedding treatment program is a comprehensive plan designed to help individuals prepare physically and mentally for their wedding day. Over the course of 100 days, the program focuses on improving fitness, enhancing overall health, and boosting confidence. It typically includes personalized fitness routines, nutritional guidance, skincare treatments, stress management techniques, and mental wellness practices. The goal is to ensure the bride and groom feel their best, both physically and emotionally, leading up to their big day. This holistic approach helps achieve a balanced, rejuvenated, and confident version of oneself for the wedding day.",
    },
  ];

  return (
    <div className=" w-full min-h-screen p-8 pb-20 gap-16  lg:p-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex w-full flex-col flex-wrap gap-10 items-center  justify-center p-7 text-left">
        <div className="heroSection_Image w-full min-h-screen text-center items-center justify-center gap-4 ">
          <Image
            src="/couple-7737561_1280.png"
            alt="Description of the image"
            className="object-cover w-full h-full rounded-lg bg-g"
            // layout="responsive" // Optional: Use this if you want to maintain aspect ratio
            width={800} // Replace 800 with the desired width value
            height={500}
          />
        </div>
        <div>
          <h1 className="gap-5 mb-6 text-3xl font-bold lg:text-5xl mx-auto bg-gradient-to-b from-[#ff3f3f] to-[#fdb07d] text-transparent bg-clip-text">
            Illaram Healthcare - Pre-Marriage Preparation Services
          </h1>
          <p className="paraGraph ">
            At Illaram Healthcare, we understand that marriage is one of the
            most significant milestones in life. To ensure you step into this
            new chapter feeling your absolute best, we offer a comprehensive,
            holistic approach to pre-marriage preparation. Our tailored programs
            are designed to help you be fully prepared—physically, mentally, and
            emotionally—for a healthy, fulfilling marital journey.
          </p>
        </div>
        <div>
          <h1 className="text-left underline gap-4 pb-5">
            Our Services Include
          </h1>

          {servicelist.map((service, index) => (
            <li key={index} className="flex flex-col gap-5 pt-6 text-left ">
              <h2 className=" capitalize text-emerald-800 lg:text-5xl">
                {"#  "}
                {service.title}
              </h2>
              <p className="paraGraph ">{service.serv_describe}</p>
            </li>
          ))}
        </div>
        <div>
          <h2 className="gap-5 mb-5">Why Choose Illaram Healthcare?</h2>

          <p className="paraGraph">
            At Illaram Healthcare, we believe that a well-rounded approach to
            preparation is the key to a happy, successful marriage. Our services
            are <br className="text-emerald-800" /> 100% personalized, ensuring
            that every aspect of your journey is thoughtfully addressed. Whether
            you need to enhance your physical health, mental clarity, or
            emotional resilience, we provide the tools and support you need to
            embark on your marital journey confidently and stress-free. Let us
            help you start this exciting new chapter in the best possible way.
            Contact us today to learn more about how we can help you prepare for
            a healthy, happy, and fulfilling marriage.
          </p>
        </div>
      </div>
    </div>
  );
};
export default servicees;
// Compare this snippet from app/layout.tsx:
