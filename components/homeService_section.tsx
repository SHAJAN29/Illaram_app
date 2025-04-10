"use client";

import { illaramColors, Service_card_details } from "@/constants";
import { CardDefault } from "../small_components/service_card";
import React from "react";

//  At Illaram Healthcare, we recognize that marriage is a significant life journey, and we are here to help make it a reality with complete, holistic preparation. Our all-encompassing approach ensures you are physically, mentally, and emotionally ready to step into this new chapter of life. We offer tailored solutions that focus on strengthening your health, boosting confidence, and fostering emotional well-being, so you can embark on a joyful, balanced, and fulfilling marital journey with ease and grace.

const HomeService_section = () => {
  const {
    illaramPrimary,
    illaramPrimaryDark,
    illaramAccent,
    illaramAccentDark,
    illaramBackground,
    illaramBackgroundDark,
    illaramText,
    illaramTextDark,
  } = illaramColors.colors;

  return (
    <section className="flex flex-col min-h-screen p-10 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className=" text-center items-center justify-center gap-4 ">
        <h1 className={`intro_title_h1 text-${illaramPrimary} pb-5`}>
          We Offer
        </h1>
        <p className=" paraGraph w-full text-gray-600 lg:text-3xl text-[17px] mx-auto">
          At Illaram Healthcare, we understand that the journey to marriage is a
          dream to a person,we help you prepare for marriage with a holistic
          approach to health and wellness. Our personalized solutions ensure
          you're physically, mentally, and emotionally ready for a fulfilling,
          joyful marital journey....
        </p>
      </div>

      <div className="flex flex-wrap gap-4 items-center justify-center">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         Replace with your service cards 
        <div className="bg-white p-4 rounded shadow">Service Card 1</div>
        <div className="bg-white p-4 rounded shadow">Service Card 2</div>
        <div className="bg-white p-4 rounded shadow">Service Card 3</div>
      </div> */}
        {Service_card_details.map(({ title, description, image }, index) => (
          <CardDefault
            key={index}
            title={title}
            image={image}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};
// Compare this snippet from app/page.tsx:

export default HomeService_section;
