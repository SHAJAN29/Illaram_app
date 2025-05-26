import Hair_Fall_Queries from "@/small_components/Hair_Fall_Queries";
import ReviewCarousel from "@/small_components/ReviewCarousel";
import React from "react";

export const Home_Testimony = () => {
  return (
    <section className="flex items-center justify-center mt-10 mb-10 gap-16 ">
      <div className="flex flex-col text-center items-center justify-center gap-4 ">
        {/* <Hair_Fall_Queries /> */}
        <ReviewCarousel />
      </div>
    </section>
  );
};
