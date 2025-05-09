import { Service_card_details } from "@/constants/index";
import { CardDefault } from "@/small_components/service_card";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-wrap gap-4 font-[poppins] mt-20 p-5 items-center justify-center">
      <div className="flex flex-col text-center  capitalize font-bold text-3xl">
        <h1 className={`pb-3 illaramAccent`}>Exclusive wellness plans:</h1>
        <p className={` text-gray-400 max-sm:text-[15px] font-normal pb-3`}>
          At Illaram, we believe that every individual is unique,so Our
          specialized packages are designed to cater to the unique needs of
          adults preparing for marriage, focusing on holistic well-being —
          <span className="illaramPrimary">inside and out. 100% natural</span>
        </p>
      </div>
      {Service_card_details.map(
        ({ title, description, image, pageLink }, index) => (
          <CardDefault
            key={index}
            title={title}
            image={image}
            pageLink={pageLink}
            description={description}
          />
        )
      )}
    </div>
  );
};

export default page;
