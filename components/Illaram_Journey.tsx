import TraJourney from "@/small_components/journey";
import React from "react";

const Illaram_Journey = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen ">
      <h1 className="intro_title_h1 font-[family-name:var(--font-geist-sans)] lg:text-7xl mb-4 font-bold text-center text-gray-800">
        Your Journey to Wellness: <br />{" "}
        <span className="text-[#ff5f37]">How It Works</span>
      </h1>

      <TraJourney />
    </section>
  );
};

export default Illaram_Journey;
