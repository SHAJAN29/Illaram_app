"use client";

import ProgramCard from "@/components/ProgramCard";
import { useParams } from "next/navigation";

const programList = [
  {
    title: '🔥 100-Day Pre-Wedding Program',
    description: 'A holistic glow-up from the inside out.',
    price: 4999,
  },
  {
    title: '✨ Beauty Enhancement Program',
    description: 'Targeted skin & hair treatments for your big day.',
    price: 2999,
  },
  {
    title: '💪 Physical Conditioning Program',
    description: 'Sculpt your body with personalized training + diet.',
    price: 3499,
  },
  {
    title: '🧠 Mind-Prep Program',
    description: 'Get mentally and emotionally prepared for marriage.',
    price: 1999,
  },
];

const Programs = () => {
  const params = useParams();
  console.log("Params: ", params);  // Log the params to see what it returns

  const username = params?.id;

  return (
    <div className="font-poppins bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">
          Our Programs {}
        </h2>
        <p className="font-[poppins] font-medium capitalize text-center p-10">You're making a great decision, <span className="illaramPrimary font-bold"> {`${username ? username : "Guest"}`} </span> In your life...</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programList.map((program, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <ProgramCard
                title={program.title}
                description={program.description}
                price={program.price}
                username={username} // Pass to ProgramCard if needed
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
