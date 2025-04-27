"use client";

import { Service_card_details } from "../constants";
import { CardDefault } from "../small_components/service_card";
import React from "react";
import RootCauseSection from "./RootCase";

//  At Illaram Healthcare, we recognize that marriage is a significant life journey, and we are here to help make it a reality with complete, holistic preparation. Our all-encompassing approach ensures you are physically, mentally, and emotionally ready to step into this new chapter of life. We offer tailored solutions that focus on strengthening your health, boosting confidence, and fostering emotional well-being, so you can embark on a joyful, balanced, and fulfilling marital journey with ease and grace.

const HomeService_section = () => {
  return (




    <section className="flex flex-col p-10 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className=" text-left items-center justify-center  max-sm:px-2 md:px-30 lg:px-35">
        {/* <h1 className={`intro_title_h1 text-illaramPrimary pb-5`}>We Offer</h1>
        <p className=" paraGraph w-full text-gray-600 lg:text-2xl md:text-2xl max-sm:text-[17px] mx-auto">
          At Illaram Healthcare, we understand that the journey to marriage is a
          dream to a person,we help you prepare for marriage with a holistic
          approach to health and wellness. Our personalized solutions ensure
          you're physically, mentally, and emotionally ready for a fulfilling,
          joyful marital journey....
        </p> */}

        <RootCauseSection />
      </div>

      <div className="flex flex-wrap gap-4 items-center justify-center">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         Replace with your service cards 
        <div className="bg-white p-4 rounded shadow">Service Card 1</div>
        <div className="bg-white p-4 rounded shadow">Service Card 2</div>
        <div className="bg-white p-4 rounded shadow">Service Card 3</div>
      </div> */}
        <div className="flex flex-col text-center  capitalize font-bold text-3xl">
          <h1 className={`pb-3 illaramAccent`}>packages :</h1>
          <p className={` text-gray-400 max-sm:text-[15px] font-normal pb-3`}>
            At Illaram, we believe that every individual is unique,so Our
            specialized packages are designed to cater to the unique needs of
            adults preparing for marriage, focusing on holistic well-being —
            <span className="illaramPrimary">inside and out. 100% natural</span>
          </p>
        </div>
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
