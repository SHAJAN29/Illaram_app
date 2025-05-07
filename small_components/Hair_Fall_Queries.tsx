import { contactNumber } from "@/constants/index";
import React from "react";

const Hair_Fall_Queries = () => {
  const { phoneNumber } = contactNumber;

  return (
    <div className=" max-sm:h-133 gap-5 bg-[#148b7c] shadow-sm rounded-lg p-8 mt-2 mb-30 border-[#f9f9f9]">
      <h3 className="text-white font-bold text-3xl p-5">Any Quries</h3>
      <p className="text-white max-sm:[17px] md:text-[20px] lg:text-[25px]">
        Get answers to all your queries by certified doctors & coaches.
      </p>

      <a
        href={`tel:${phoneNumber}`}
        className="bg-[#ff5f37] hover:bg-[#ff4437] cursor-pointer text-white font-bold py-3 mt-5 px-6 rounded-full transition duration-300 inline-block text-center"
      >
        Free Consultation
      </a>

      <p className="text-gray-50 max-sm:[17px] md:text-[20px] lg:text-[25px] mt-5 p-5 pt-5">
        Let us help you to build the best version of oneself for the wedding
        day.
      </p>
      <p className="text-[#f0f0f0] font-bold text-[12px]  pt-5 uppercase">
        Don't think twice,some moments are priceless,
        <br className="text-white" /> this is one of them.
      </p>
    </div>
  );
};
export default Hair_Fall_Queries;
