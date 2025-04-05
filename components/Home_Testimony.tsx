import Hair_Fall_Queries from "@/small_components/Hair_Fall_Queries";
import ReviewCarousel from "@/small_components/ReviewCarousel";
import React from "react";

export const Home_Testimony = () => {
  return (
    <section className="flex items-center justify-center min-h-screen p-10 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col text-center items-center justify-center gap-4 ">
        <Hair_Fall_Queries />
        <ReviewCarousel />
      </div>
    </section>
  );
};
