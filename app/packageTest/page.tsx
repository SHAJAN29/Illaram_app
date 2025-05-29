"use client";

import ProgramCard from "@/components/ProgramCard";
import { useParams } from "next/navigation";
import { programList } from "@/constants/index";

const Programs = () => {
  const params = useParams();
  const username = params?.id;

  return (
    <div className="font-poppins bg-gradient-to-br from-[#f4f7f0] via-white to-[#f4f7f0] py-20">
      {/* Marquee Section */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="animate-marquee whitespace-nowrap overflow-hidden">
          <div className="inline-block animate-marquee-inner">
            <p className="text-[#94c159] font-medium">
              100% Satisfaction Guarantee!&nbsp;&nbsp;&nbsp;100% money back guarantee!
            </p>
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .animate-marquee {
            display: flex;
            overflow: hidden;
            position: relative;
          }

          .animate-marquee-inner {
            display: inline-block;
            white-space: nowrap;
            animation: marquee 10s linear infinite;
          }
        `}</style>
      </div>

      {/* Program Section */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <h2 className="text-5xl font-bold text-center text-[#2e2e2e] mb-6 tracking-tight">
          Exclusive wellness plans
        </h2>

        <p className="text-lg text-center text-[#a9aba6] max-w-2xl mx-auto mb-8 leading-relaxed">
          You're making a great decision,{" "}
          <span className="text-[#94c159] font-semibold">
            {username ? username : "Guest"}
          </span>
          . Each program is crafted to help you thrive and grow.
        </p>

        <p className="text-lg text-center text-[#a9aba6] max-w-2xl mx-auto mb-14 leading-relaxed">
          Experienced doctors, psychiatrists, nutritionists, fitness trainers, and
          wellness coaches are here to help you achieve your goals{" "}
          <span className="text-[#94c159] font-semibold">Transformation made easy</span>.
        </p>

        {/* Program Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {programList.map((program, i) => (
            <div
              key={i}
              className="relative rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]"
            >
              <ProgramCard
                mostPopular={program.mostPopular ?? false}
                duration={program.duration || "check with us"}
                highlights={program.highlights}
                title={program.title}
                description={program.description}
                price={program.price}
                popular={program.popular ?? false}
                username={username}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer Quote Section */}
      <div className="mt-16 flex justify-center items-center bg-[#f4f7f0]">
        <div>
          <h5 className="text-3xl font-bold capitalize text-center text-gray-800 mb-6 px-5 tracking-tight">
            A healthy person has a thousand dreams 😃, an unhealthy person has only one dream 😔 --- My Body.
          </h5>
          <p className="text-lg text-center font-semibold text-[#a9aba6] max-w-2xl mx-auto leading-relaxed">
            Prevent yourself from being sick and unhealthy. Live a happy life with your loved ones.
          </p>
          <p className="text-lg text-center uppercase text-[#a9aba6] max-w-2xl mx-auto mt-3 mb-14 leading-relaxed">
            The choice is yours,{" "}
            <span className="text-[#94c159] font-semibold">
              {username ? username : "Guest"}
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
