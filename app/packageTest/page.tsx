"use client";

import ProgramCard from "@/components/ProgramCard";
import { useParams } from "next/navigation";
import { CheckCircleIcon } from "@heroicons/react/24/solid"; // Import the icon (Heroicons v2)

import { programList } from "@/constants/index"; // Import your program list from constants

const Programs = () => {
  const params = useParams();
  console.log("Params: ", params); // Log the params to see what it returns

  const username = params?.id;
  console.log(username);

  return (
    <div className="font-poppins bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20">
      <div className="overflow-hidden whitespace-nowrap">
        <div className="animate-marquee whitespace-nowrap overflow-hidden">
          <div className="inline-block animate-marquee-inner">
            <p className="">
              {" "}
              100% Satisfaction Guarantee!&nbsp;&nbsp;&nbsp;100% money back
              guarantee!
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
            color: oklch(57.7% 0.245 27.325);
          }

          .animate-marquee-inner {
            display: inline-block;
            white-space: nowrap;
            animation: marquee 10s linear infinite;
          }
        `}</style>
      </div>
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-6 tracking-tight">
          Exclusive wellness plans
        </h2>
        <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mb-14 leading-relaxed">
          You're making a great decision,{" "}
          <span className="text-illaramPrimary font-semibold">
            {username ? username : "Guest"}
          </span>
          . Each program is crafted to help you thrive and grow.
        </p>
        <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mb-14 leading-relaxed">
          Experienced doctors,phycartist,nutritionist,fitness trainers and
          wellness coaches are here to help you achieve your goals{" "}
          <span className="text-illaramPrimary font-semibold">
            Transformation made easy
          </span>
          .
        </p>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {programList.map((program, i) => (
            <div
              key={i}
              className="relative  rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]"
            >
              <ProgramCard
                mostPopular={program.mostPopular ?? false}
                duration={program.duration || "check with us"}
                highlights={program.highlights}
                title={program.title}
                description={program.description}
                price={program.price}
                popular={program.popular ?? false}
                username={username} // Pass to ProgramCard if needed
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex justify-center items-center bg-emerald-50">
        <div className="">
          <h5 className="text-3xl font-bold capitalize text-center text-gray-800 mb-6 p-5 tracking-tight">
            healthy person has thousand Dreams 😃, an unhealthy person has only
            one Dream 😔 ---My Body.
          </h5>
          <p className="text-lg text-center font-semibold text-gray-600 max-w-2xl mx-auto leading-relaxed">
            prevent yourself from being sick and unhealthy, and live a happy
            life with your loved ones.
          </p>
          <p className="text-lg text-center uppercase text-gray-600 max-w-2xl mx-auto mb-14 leading-relaxed">
            Choise is yours{" "}
            <span className="text-illaramPrimary font-semibold">
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

// <div className="font-poppins bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16">
// <div className="max-w-6xl mx-auto px-6 sm:px-10">
//   <h2 className="text-5xl font-bold text-center text-gray-800 mb-6 tracking-tight">
//     Explore Our Programs
//   </h2>
//   <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mb-14 leading-relaxed">
//     You're making a great decision, <span className="text-illaramPrimary font-semibold">{username ? username : "Guest"}</span>. Each program is crafted to help you thrive and grow.
//   </p>

//   <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
//     {programList.map((program, i) => (
//       <div
//         key={i}
//         className="relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]"
//       >
//         <div className="p-8 space-y-4">
//           <h3 className="text-xl font-semibold text-gray-800 tracking-tight">{program.title}</h3>
//           <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>

//           {/* Key Highlights with Icons */}
//           <ul className="mt-4 space-y-3 text-sm text-gray-700">
//             {program.highlights?.map((point, index) => (
//               <li key={index} className="flex items-start gap-2">
//                 <CheckCircleIcon className="w-5 h-5 text-illaramPrimary flex-shrink-0" />
//                 <span>{point}</span>
//               </li>
//             ))}
//           </ul>

//           <div className="text-lg font-bold text-illaramPrimary mt-6">${program.price}</div>
//         </div>

//         {program.popular && (
//           <div className="absolute top-4 right-4 px-3 py-1 bg-illaramPrimary text-white text-xs font-medium rounded-full shadow-md">
//             Popular
//           </div>
//         )}
//       </div>
//     ))}
//   </div>
// </div>
// </div>
