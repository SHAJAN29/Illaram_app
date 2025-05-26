import { contactNumber } from "@/constants/index";
import React from "react";

const Hair_Fall_Queries = () => {
  const { phoneNumber } = contactNumber;

  return (
    <div className="bg-[#97c25f] text-white rounded-2xl shadow-lg p-8 sm:p-10 font-[poppins] max-w-3xl mx-auto my-12">
      <h3 className="text-3xl sm:text-4xl font-extrabold mb-4">Any Queries?</h3>

      <p className="text-base sm:text-lg mb-6 leading-relaxed text-[#f4f7f0]">
        Get answers to all your hair fall or wellness concerns from certified doctors & lifestyle coaches.
      </p>

      <a
        href={`tel:${phoneNumber}`}
        className="bg-[#ff5f37] hover:bg-[#ff4437] text-white text-center font-semibold py-3 px-6 rounded-full text-lg inline-block transition duration-300"
      >
        Free Consultation
      </a>

      <p className="text-[#f4f7f0] text-base sm:text-lg mt-6 leading-relaxed">
        Let us help you become the best version of yourself — naturally, beautifully, and confidently.
      </p>

      <p className="text-[#f4f7f0] font-semibold text-sm uppercase tracking-wide mt-6 opacity-90">
        Don’t think twice — some moments are priceless.
        <br /> This is one of them.
      </p>
    </div>
  );
};

export default Hair_Fall_Queries;
